// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const aboutMeController = require("../controllers/aboutMeController");

router.get("/aboutMe", aboutMeController.index);

module.exports = router; // renaming router export to mainRouter
