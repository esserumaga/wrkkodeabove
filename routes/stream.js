const express = require('express')
const router = express.Router()
const streamController = require("../controllers/StreamController")
const {check} = require("express-validator")
const checkStreams = require("../middleware/checkForStreams")
const validateInput = require("../middleware/inputValidation")

router.post("/start-stream",...[
    check('userId').exists().trim().withMessage('userId is required.').escape(),
    check('streamId').exists().trim().withMessage('streamId is required.').escape(),
    validateInput,
    checkStreams
],streamController.startStream)

router.delete("/clear-streams",...[
    check('userId').exists().trim().withMessage('userId is required.').escape(),
    validateInput,
],streamController.clearStreams)

router.delete("/remove-stream",...[
    check('id').exists().trim().withMessage('id is required.').escape(),
    validateInput,
],streamController.removeUserStream)

router.get("/streams/:userId",streamController.getUserStreams)

module.exports = router