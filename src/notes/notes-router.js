const express = require('express')
const xss = require('xss')
const path = require('path')

// service 
const NotesService = require('./notes-service')

//router/jsonParser
const notesRouter = express.Router()
const jsonParser = express.json()

//routes
notesRouter
  .route('/')
  .get((req, res, next) => {
    NotesService.getAllNotes(req.app.get('db'))
      .then(notes => {
        console.log(notes)
        res.json(notes.map(NotesService.serializeNote))
      })
      .catch(next)
  })

  //post new note
  .post(jsonParser, (req, res, next) => {
    const { title, content, date_created } = req.body
    const newNote = { title, content, date_created }

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