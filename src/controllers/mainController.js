// Acá nos falta nuestra fuente de datos
const path = require("path")
const express = require("express")
const app = express();
const fs = require("fs");



const mainController = {

    index: (req, res) => {
        
        res.render("index.ejs")
    },

    mercadoliebre: (req, res) => {

        res.render("mercadoliebre.ejs")
    },

}

module.exports = mainController;
