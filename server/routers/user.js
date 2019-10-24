const authMiddleware = require("../middleware/auth");
const userModel = require("../database/models/user");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = new express.Router();

router.post("/api/login", authMiddleware, async (req, res) => {
  try {
    const user = await userModel.findByCredentials(username, password);
    if (!user) {
      res.status(500).send();
    }
    const token = jwt.sign(
      { user_id: user.user_id.toString() },
      "awesomeversionthree"
    );
    res.json({
      success: true,
      message: "Authentication successful!",
      token: token
    });
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/api/homepage", authMiddleware, async (req, res) => {
  try {
    const user = await userModel.getUserProfile(4);
    if (!user) {
      res.status(500).send();
    }
    res.json(user);
    console.log(user);
  } catch {
    console.log(e);
    res.status(500).send();
  }
});
router.get("/api/profile", async (req, res) => {
  try {
    const user = await userModel.getUserProfile(4);
    if (!user) {
      res.status(500).send();
    }
    res.send(user);
    console.log(user);
  } catch {
    console.log(e);
    res.status(500).send();
  }
});

router.post("/api/logout", authMiddleware, async (req, res) => {
  try {
    req.token = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
