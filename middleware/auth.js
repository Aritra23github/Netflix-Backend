const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET;

exports.auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            let decodedToken = jwt.verify(token, SECRET);
            req.user = decodedToken;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}