const express = require('express');
const xss = require('xss');
const path = require('path');
const requireAuth = require('../middleware/jwt-auth');

const TriggerPointService = require('./trigger-point-service');

const triggerPointRouter = express.Router();
const jsonParser = express.json();

// get all tp for user
triggerPointRouter
  .route('/user/trigger-points')
  .get(requireAuth, (req, res) => {
    console.log(req.user);
    console.log(req.user.id);
    TriggerPointService.getTriggerPointsByUser(
      req.app.get('db'),
      req.user.id
    )
      .then(user_tp => {
        console.log(user_tp);
        if (!user_tp) {
          return res.status(404).json({
            error: { message: `Users Trigger Points do not exist` }
          });
        }
        res.json(user_tp);
      });
  });



/// routes by id
triggerPointRouter
  .route('/:tp_id')
  .all((req, res, next) => {
    if (isNaN(parseInt(req.params.tp_id))) {
      return res.status(400).json({
        error: { message: `Invalid id ${req.params.tp_id}` }
      });
    }
    TriggerPointService.getTriggerPointsById(
      req.app.get('db'),
      req.params.tp_id
    )
      .then(tp => {
        if (!tp) {
          return res.status(404).json({
            error: { message: `Trigger Point does not exist` }
          });
        }
        console.log(tp);
        res.triggerpoint = tp;
        next();
      })
      .catch(next);
  })

  //get trigger points by id
  .get((req, res) => {
    res.json(res.triggerpoint);
  });



module.exports = triggerPointRouter;