const {apiErrorResponse, apiSuccessResponse} = require("../util/apiHelper")
const Constants = require("../util/constants")
const streamDataModel = require("../models/StreamData")
exports.startStream = async (req, res) => {
    try{
        const stream = new streamDataModel(req.body)
        await stream.save()
        return  apiSuccessResponse(res, stream)
    }catch (e) {
        return apiErrorResponse(res, Constants.serverError)
    }
}

exports.clearStreams = async (req, res) => {
    try {
        await  streamDataModel.deleteMany({userId: req.body.userId})
        return apiSuccessResponse(res, "Streams Cleared!")
    }catch (e) {
        return apiErrorResponse(res, Constants.serverError)
    }
}

exports.getUserStreams = async (req, res) => {
    try {
        const {userId} = req.params
        const streams = await streamDataModel.find({userId: userId})
        return apiSuccessResponse(res, streams)
    }catch (e) {
        return apiErrorResponse(res, Constants.serverError)
    }
}

exports.removeUserStream = async (req, res) => {
    try {
        await  streamDataModel.deleteOne({_id: req.body.id})
        return apiSuccessResponse(res, "Stream Deleted!")
    }catch (e) {
        return apiErrorResponse(res, Constants.serverError)
    }
}