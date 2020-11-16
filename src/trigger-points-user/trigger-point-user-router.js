const express = require('express')
const xss = require('xss')
const path = require('path')
const requireAuth = require('../middleware/jwt-auth')

const TriggerPointUserService = require('./trigger-point-user-service')

const triggerPointUserRouter = express.Router()
const jsonParser = express.json()

triggerPointUserRouter
  .route('/')
  .get(requireAuth, (req, res, next) => {
    console.log(req.user)
    console.log(req.user.id)
    TriggerPointUserService.getAllTriggerPoints(
      req.app.get('db'),
      req.user.id
    )
      .then(user_tp => {
        console.log(user_tp)
        if (!user_tp) {
          return res.status(404).json({
            error: { message: `Users Trigger Points do not exist` }
          })
        }
        res.json(user_tp)
      })
      .catch(next)
  })

  .post(requireAuth, jsonParser, (req, res, next) => {
    console.log(req.body)
    const { trigger_points_id } = req.body
    const newTp = { user_id: req.user.id, trigger_points_id }

    TriggerPointUserService.insertTriggerPoints(
      req.app.get('db'),
      newTp
    )
      .then(tp => {
        res
          //display the 201 status code
          .status(201)
          .json(tp)
      })
      .catch(next)
  })


/// routes by id
triggerPointUserRouter
  .route('/:tp_id')
  .all((req, res, next) => {
    if (isNaN(parseInt(req.params.tp_id))) {
      return res.status(400).json({
        error: { message: `Invalid id ${req.params.tp_id}` }
      })
    }
    TriggerPointUserService.getTriggerPointsById(
      req.app.get('db'),
      req.params.tp_id
    )
      .then(tp => {
        if (!tp) {
          return res.status(404).json({
            error: { message: `Trigger Point does not exist` }
          })
        }
        console.log(tp)
        res.triggerpoint = tp
        next()
      })
      .catch(next)
  })

  //get trigger points by id
  .get((req, res) => {
    res.json(res.triggerpoint)
  })



module.exports = triggerPointUserRouter