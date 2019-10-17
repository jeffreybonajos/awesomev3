const express = require('express')
const router = new express.Router()
const userModel = require('../database/models/user')
const authMiddleware = require('../middleware/auth')
const jwt = require('jsonwebtoken')

router.post('/api/login', async (req, res) => {
  try {
    const user = await userModel.findByCredentials(req.body.username, req.body.password)
    if(!user){
      res.status(500).send()
    }
    const token = jwt.sign({ user_id: user.user_id.toString() }, 'awesomeversionthree')
    const userfullInfo = await userModel.getUserProfile(user.user_id)
    res.send({user: user, token: token, userInfo: userfullInfo})
  } catch(e){
    res.status(400).send(e)
  }
})

router.get('/api/home', authMiddleware, async (req, res) => {
  res.send(req.user)
}) 

router.post('/api/logout', authMiddleware, async (req, res) => {
  try {
    req.token = []
    await req.user.save()
    res.send()
  } catch(e) {
    res.status(500).send()
  }
})




module.exports = router;