const express = require('express');
const xss = require('xss');
const path = require('path');
const requireAuth = require('../middleware/jwt-auth');

const TriggerPointUserService = require('./trigger-point-user-service');

const triggerPointUserRouter = express.Router();
const jsonParser = express.json();

triggerPointUserRouter
  .route('/')
  .get(requireAuth, (req, res, next) => {
    TriggerPointUserService.getAllTriggerPoints(
      req.app.get('db'),
      req.user.id
    )
      .then(user_tp => {
        if (!user_tp) {
          return res.status(404).json({
            error: { message: `Users Trigger Points do not exist` }
          });
        }
        res.json(user_tp);
      })
      .catch(next);
  })

  .post(requireAuth, jsonParser, (req, res, next) => {
    const { trigger_points_id } = req.body;
    const newTp = { user_id: req.user.id, trigger_points_id };

    TriggerPointUserService.getTriggerPointsByUser(
      req.app.get('db'),
      req.user.id
    )
      .then(showTriggerPointByUserId => {
        // define variable to store duplicates 
        let foundDuplicate = 0;
        // loop through array of objects from the response
        for (let i = 0; i < showTriggerPointByUserId.length; i++) {
          //if response contains trigger_points_id 
          if (showTriggerPointByUserId[i].trigger_points_id == trigger_points_id) {
            // update found duplicate 
            foundDuplicate = 1;
          }
        }


        if (foundDuplicate == 0) {
          // check if user already has trigger point id saved 
          TriggerPointUserService.insertTriggerPoints(
            req.app.get('db'),
            newTp
          )
            .then(tp => {
              res
                //display the 201 status code
                .status(201)
                .json(tp);
            })
            .catch(next);
        } else {
          res
            //display the 400 status code
            .status(400)
            .json({ error: "Duplicated entry" });
        }
      })
      .catch(next);
  });


/// routes by id
triggerPointUserRouter
  .route('/:tp_id')
  .all((req, res, next) => {
    if (isNaN(parseInt(req.params.tp_id))) {
      return res.status(400).json({
        error: { message: `Invalid id ${req.params.tp_id}` }
      });
    }
    TriggerPointUserService.getTriggerPointsById(
      req.app.get('db'),
      req.params.tp_id
    )
      .then(tp => {
        if (!tp) {
          return res.status(404).json({
            error: { message: `Trigger Point does not exist` }
          });
        }
        res.triggerpoint = tp;
        next();
      })
      .catch(next);
  })

  //get trigger points by id
  .get((req, res) => {
    res.json(res.triggerpoint);
  });



module.exports = triggerPointUserRouter;