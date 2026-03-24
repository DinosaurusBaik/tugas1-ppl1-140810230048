const express = require("express");
const router = express.Router();
const User = require("../models/users");

//Getting one user
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting all users
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Creating one user
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    userToChannel: req.body.userToChannel,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one user
router.patch("/:id", (req, res) => {
  // res.patch("Update one user");
});

//Deleting one user
router.delete("/:id", (req, res) => {
  // res.delete("Delete one user");
});

module.exports = router;
