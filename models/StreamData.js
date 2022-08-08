const mongoose = require("mongoose");

const StreamDataSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    streamId: {
        type: String,
        required: true
    },
});

const StreamData = mongoose.model("StreamData", StreamDataSchema);

module.exports = StreamData