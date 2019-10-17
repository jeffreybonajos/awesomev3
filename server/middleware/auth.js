const userModel = require('../database/models/user')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.header('Authorization').replace('Bearer', '') 
        const decoded = jwt.verify(token, 'awesomeversionthree')
        const user = await userModel.getUserProfile(decoded.user_id)

        if(!user) {
            throw new Error ('error auth')
        }
        req.token = token
        req.user = user
        res.json({user, token})
    } catch(e) {
        res.status(403).send(e)
    }
}

module.exports = auth