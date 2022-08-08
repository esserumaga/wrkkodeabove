const Constants = require("../util/constants")
exports.apiSuccessResponse = (res, message ,data, code = 200) => {
    return res.status(code).json({
        "status": Constants.kSuccess,
        "message": message,
        "data": data
    });
};

exports.apiErrorResponse = (res, message ,error, code = 422) => {
    return res.status(code).json({
        "status": Constants.kFailed,
        "message": message,
        "error": error
    });
};