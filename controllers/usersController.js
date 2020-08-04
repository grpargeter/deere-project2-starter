const express = require("express");
const router = express.Router();
const UserModel = require("../models").User;
const Sunsets = require("../models").Sunsets;

//Show/Grab Profile
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id, {
    include: [
      {
        model: Sunsets,
        attributes: ["id", "title", "url"],
      },
    ],
  }).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

//Edit Profile Route
router.put("/profile/:id", (req, res) => {
  UserModel.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.redirect(`/users/profile/${req.params.id}`);
  });
});

//Delete route
router.delete("/:id", (req, res) => {
  UserModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
