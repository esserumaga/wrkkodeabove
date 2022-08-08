const streamDataModel = require("../models/StreamData")
const {apiErrorResponse} = require("../util/apiHelper");
const checkForStreams = async (req, res, next) => {

    const {userId} = req.body
    const streams = await streamDataModel.find({userId: userId})
    if(streams && streams.length >= 3) {
        return apiErrorResponse(res, "Exceeded 3 streams")
    }
    return next();
}

module.exports = checkForStreams