const { validationResult } = require('express-validator')
const {kFailed} = require("../util/constants");

const validateInput = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ status: kFailed, message: "Invalid input", errors: errors.array() });
    }

    return next();
}

module.exports = validateInput