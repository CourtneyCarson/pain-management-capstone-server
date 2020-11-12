const NotesService = {
  getAllNotes(db) {
    console.log(db)
    return db.select('*').from('notes')
  },
  getNoteById(db, note_id) {
    return db
      .from('notes')
      .select('*')
      .where({ 'id': note_id })
      .first()
  },
  insertNote(db, newNote) {
    return db
      .insert(newNote)
      .into('notes')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  deleteNote(db, note_id) {
    return db('notes')
      .where({ 'id': note_id })
      .delete()
  }, 
  updateNote(db, note_id, newNote) {
    return db('notes')
      .where({ 'id': note_id })
      .update(newNote, returning = true)
    .returning('*')
  },
  serializeNote(note) {
    const { content, title, date_created } = note
    return {
      content: content,
      title: title,
      date_created: date_created
    }
  }
}

module.exports = NotesService;