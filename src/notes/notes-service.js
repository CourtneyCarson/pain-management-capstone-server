const NotesService = {
  getAllNotes(db) {
    console.log(db)
    return db.select('*').from('notes')
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