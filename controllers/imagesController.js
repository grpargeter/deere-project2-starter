const express = require("express");
const router = express.Router();
const Sunsets = require("../models").Sunsets;
const User = require("../models").User;
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
cloudinary.config({
  cloud_name: "do6js4ole",
  api_key: "948582958591573",
  api_secret: "TJx_k2IswuXOdQGB73hRdaO6xs0",
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { folder: "assets" },
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});
const parser = multer({ storage: storage });

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
  res.render("images/new.ejs", {
    userId: req.user.id
  })
});
// SHOW ROUTE - GET ONE Sunset Picture
router.get("/:id", (req, res) => {
  Sunsets.findByPk(req.params.id, { include: [User] }).then((image) => {
    res.render("images/show.ejs", {
      image: image
    });
  });
});

// Post route - Takes form data and creates a new //Sunset Entry working route....
router.post("/", (req, res) => {
  Sunsets.create(req.body).then((newImage) => {
    console.log(req.user.id);
    res.redirect("/images");
  });
});

// router.post("/", parser.single("image"), (req, res) => {
//   console.log(req.file); // to see what is returned to you
//   console.log(req.user.id);
//   res.send(req.file);

//   // const image = {};
//   // image.url = req.file.url;
//   // image.id = req.file.public_id;
//   // Image.create(image) // save image information in database
//   //   .then((newImage) => res.json(newImage))
//   //   .catch((err) => console.log(err));
// });

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
