
const TriggerPointService = {
  getAllTriggerPoints(db) {
    console.log(db)
    return db
      .select('*')
      .from('trigger_points')
  },
  getTriggerPointsById(db, tp_id) {
    return db
      .from('trigger_points')
      .select('*')
      .where({ 'id': tp_id })
      .first()
  },
  //do I add save tp's here - or would this be in notes
  //saveTriggerPoints(db, tp_id) {
  //return db
  //  .from('trigger_points')
  //  .select('*')
  //  .where({'id': tp_id})
  // }
}

module.exports = TriggerPointService