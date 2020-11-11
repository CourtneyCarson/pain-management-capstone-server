const express = require('express')
const path = require('path')

//connect to service
const UsersService = require('./users-service')
const { hasUncaughtExceptionCaptureCallback } = require('process')
const { hasUserWithUserName } = require('./users-service')

const usersRouter = express.Router()
const jsonBodyParser = express.json()

//all users
usersRouter
  .route('/')
  .get((req, res, next) => {
    UsersService.getAllUsers(req.app.get('db'))
      .then(user => {
        console.log('User:', user)
        res.json(user)
      })
      .catch(next)
  })

  //post registering users
  .post(jsonBodyParser, (req, res, next) => {
    const { email, password } = req.body

    console.log('email:'.email, 'password:', password)

    for (const field of ['email', 'password'])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        })
    const passwordError = UsersService.validatePassword(password)

    console.log('password error:', passwordError)

    if (passwordError)
      return res.status(400).json({ error: passwordError })

    UsersService.hasUserWithUserName(
      req.app.get('db'),
      email
    )
      .then(hasUserWithUserName => {

        console.log('hasUserWithUserName:', hasUserWithUserName)

        if (hasUserWithUserName)
          return res.status(400).json({ error: `Username already taken` })

        return UsersService.hashPassword(password)
          .then(hashedPassword => {
            console.log('hashedPassword:', hashedPassword)
            const newUser = {
              email,
              password: hashedPassword,
            }
            return UsersService.insertUser(
              req.app.get('db'),
              newUser
            )
              .then(user => {
                console.log('user:', user)
                res
                  .status(201)
                  .location(path.posix.join(req.originalUrl, `/${user.id}`))
              })
          })
      })
.catch(next)
  })