const express = require("express");
const router = express.Router();
const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

//Edit Profile
router.get("/:id/edit", (req, res) => {
  Users.findByPk(req.params.id).then((users) => {
    res.render("edit.ejs", {
      user: userProfile,
    });
  });
});
router.put("/profile/:id", (req, res) => {
  User.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.redirect(`/users/profile/${req.params.id}`);
  });
});

//Delete route
router.delete("/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/users");
  });
});

module.exports = router;
