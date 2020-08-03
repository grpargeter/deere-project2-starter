const express = require("express");
const router = express.Router();
const Sunsets = require("../models").Sunsets;
const UserModel = require("../models").User;

//Index Route shows entire array/database
router.get("/", (req, res) => {
  Sunsets.findAll().then((images) => {
    res.render("images/index.ejs", {
      images: images,
    });
  });
});
//put this above your show.ejs file new route form
router.get("/new", (req, res) => {
  res.render("images/new.ejs");
});
// SHOW ROUTE - GET ONE Sunset Picture
router.get("/:id", (req, res) => {
  Sunsets.findByPk(req.params.id).then((singleImage) => {
    res.render("images/show.ejs", {
      image: singleImage,
    });
  });
});

//Post route - Takes form data and creates a new Sunset Entry
router.post("/", (req, res) => {
  Sunsets.create(req.body).then((newImage) => {
    res.redirect("/images");
  });
});

//Edit route
router.get("/:id/edit", (req, res) => {
  Sunsets.findByPk(req.params.id).then((imageToEdit) => {
    res.render("images/edit.ejs", {
      image: imageToEdit,
    });
  });
});
router.put("/:id", (req, res) => {
  Sunsets.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((singlePicture) => {
    res.redirect("/images");
  });
});

//Delete a Sunset Picture, need to have delete button on index.ejs
router.delete("/:id", (req, res) => {
  Sunsets.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/images");
  });
});

module.exports = router;
