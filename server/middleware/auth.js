const userModel = require('../database/models/user')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        const decoded = jwt.verify(token, 'awesomeversionthree')
        const user = await userModel.getUserProfile(decoded.user_id)
        if(!user) {
            throw new Error ('error auth')
        }
        res.send({user, token})
    } catch(e) {
        res.status(403).send(e)
    }
}

module.exports = auth