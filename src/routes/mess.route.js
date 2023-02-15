const express = require('express')
const router = express.Router()

const messController = require('../app/controller/message.controller');

// Get All Notis
router.get('/', messController.getAllMess)

// Add A Noti
router.post('/', messController.addMess)

module.exports = router