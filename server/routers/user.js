
  try {
    }
    res.json({
      success: true,
      token: token
  }

router.get("/api/profile", async (req, res) => {
  try {
    req.token = []
    await req.user.save()
    res.send()
  } catch(e) {
    res.status(500).send()
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
})


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
