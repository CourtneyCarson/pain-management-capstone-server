const TriggerPointService = {
  getAllTriggerPoints(db) {
    console.log(db)
    return db.select('*').from('trigger_points')
  },
  getTriggerPointsById(db, tp_id) {
    return db
      .from('trigger_points')
      .select('*')
      .where({ 'id': tp_id })
      .first()
  },

}

export default TriggerPointService