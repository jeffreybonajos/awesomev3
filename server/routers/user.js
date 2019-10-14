const express = require('express')
const router = new express.Router()
const userModel = require('../database/models/user')
const authMiddleware = require('../middleware/auth')
const jwt = require('jsonwebtoken')

router.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await userModel.findByCredentials(username, password)
    if(!user){
      res.status(500).send()
    }
    const token = jwt.sign({ user_id: user.user_id.toString() }, 'awesomeversionthree')
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token
    })
  } catch(e){
    res.status(400).send(e)
  }
})

router.get('/api/homepage', authMiddleware, async (req, res) => {
  res.send(token)
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