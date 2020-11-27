
const NotesService = {
  getAllNotes(db) {
    return db.select('*').from('notes');
  },
  getAllNotesByTpId(db, tp_id) {
    return db
      .select('*')
      .from('notes')
      .where({ 'trigger_point_id': tp_id });
  },
  getNoteById(db, note_id) {
    return db
      .from('notes')
      .select('*')
      .where({ 'id': note_id })
      .first();
  },
  insertNote(db, newNote) {
    return db
      .insert(newNote)
      .into('notes')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteNote(db, note_id) {
    return db('notes')
      .where({ 'id': note_id })
      .delete();
  },
  serializeNote(note) {
    const { id, content, title, date_created, trigger_point_id } = note;
    return {
      id: id,
      content: content,
      title: title,
      date_created: date_created,
      trigger_point_id: trigger_point_id
    };
  }
};

module.exports = NotesService;




