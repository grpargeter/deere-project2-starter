const express = require("express");
const router = express.Router();
const UserModel = require("../models").User;
const Sunsets = require("../models").Sunsets;

// GET USERS PROFILE

router.get("/profile/:id", (req, res) => {
  // IF USER ID FROM TOKEN MATCHES THE REQUESTED ENDPOINT, LET THEM IN
  if (req.user.id == req.params.id) {
    UserModel.findByPk(req.params.id, {
      include: [
        {
          model: Sunsets,
        },
      ],
    }).then((userProfile) => {
      res.render("users/profile.ejs", {
        user: userProfile,
      });
    });
  } else {
    // res.json("unauthorized");
    res.redirect("/");
  }
});

// Delete route
router.delete("/:id", (req, res) => {
  UserModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/");
  });
});
module.exports = router;
