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
// GET USERS PROFILE

// router.get("/profile/:id", (req, res) => {
//   // IF USER ID FROM TOKEN MATCHES THE REQUESTED ENDPOINT, LET THEM IN
//   if (req.user.id == req.params.id) {
//     User.findByPk(req.params.id, {
//       include: [
//         {
//           model: Sunsets,
//           attributes: ["id", "name"],
//         },
//       ],
//     }).then((userProfile) => {
//       res.render("users/profile.ejs", {
//         user: userProfile,
//       });
//     });
//   } else {
//     // res.json("unauthorized");
//     res.redirect("/");
//   }
// });

module.exports = router;
