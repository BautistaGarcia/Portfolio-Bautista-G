// Acá nos falta nuestra fuente de datos
const path = require("path")
const express = require("express")
const app = express();
const fs = require("fs");

const { log } = require("console");
const { validationResult } = require("express-validator")


const mainController = {

    index: (req, res) => {
        
        res.render("index.ejs")
    },

}

module.exports = mainController;
