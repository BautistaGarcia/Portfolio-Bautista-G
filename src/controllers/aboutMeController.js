// Acá nos falta nuestra fuente de datos
const path = require("path")
const express = require("express")
const app = express();
const fs = require("fs");



const aboutMeController = {

    index: (req, res) => {
        
        res.render("index.ejs")
    },

}

module.exports = aboutMeController;
