const express = require('express')
const xss = require('xss')
const path = require('path')


// service 
const NotesService = require('./notes-service')
const requireAuth = require('../middleware/jwt-auth')

//router/jsonParser
const notesRouter = express.Router()
const jsonParser = express.json()

//routes
notesRouter
  .route('/')
  .get(requireAuth, (req, res, next) => {
    NotesService.getAllNotes(
      req.app.get('db'),
      req.user.id
    )
      .then(notes => {
        console.log(notes)
        res.json(notes.map(NotesService.serializeNote))
      })
      .catch(next)
  })

  //post new note
  .post(requireAuth, jsonParser, (req, res, next) => {
    console.log(req.body)
    const { title, content, trigger_point_id } = req.body
    const newNote = { title, content, trigger_point_id }

    //validate fields 
    for (const [key, value] of Object.entries(newNote))
      if (value == null)
        return res.status(400).json({
          error: { message: `missing ${key} in request body` }
        })
    //send data to service to save in db
    NotesService.insertNote(
      req.app.get('db'),
      newNote
    )
      .then(note => {
        const notePath = path.posix.join(req.originalUrl, `/${note.id}`)
        const serializedNote = NotesService.serializeNote(note)
        res
          .status(201)
          .location(notePath)
          .json(serializedNote)
      })
      .catch(err => {
        next(err)
      })

  })

module.exports = notesRouter