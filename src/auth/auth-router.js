const express = require('express')
const AuthService = require('./auth-service')

const authRouter = express.Router
const jsonBodyParser = express.json()

authRouter
  .post('/login', jsonBodyParser, (req, res, next) => {
  
    const {
      email,
      password
    } = req.body 
    const loginUser = {
      email,
      password
    }

    


})