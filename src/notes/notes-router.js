const express = require('express')
const NotesService = require('./notes-service')
//const {requireAuth} = require('../middleware/basic-auth')

const notesRouter = express.Router()

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

  module.exports = notesRouter