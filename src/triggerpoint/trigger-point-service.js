
const TriggerPointService = {
  getAllTriggerPoints(db) {
    return db
      .select('*')
      .from('trigger_points');
  },
  getTriggerPointsById(db, tp_id) {
    return db
      .from('trigger_points')
      .select('*')
      .where({ 'id': tp_id })
      .first();
  },
  getTriggerPointsByUser(db, user_id) {
    return db
      .from('trigger_points_user')
      .select('*')
      .join('trigger_points', { "trigger_points.id": 'trigger_points_user.trigger_points_id' })
      .where({ 'user_id': user_id });
  },

};

module.exports = TriggerPointService;