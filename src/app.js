//*******************************************************************************************\\
const express = require("express");
const path = require("path")
const fs = require("fs");
const methodOverride = require("method-override"); // requiriendo method para usar put y delate
const app = express();

//************************************* Middlewares *************************************\\
app.use(express.static("public")); // para usar los archivos estaticos de la carpeta public

// Para tomar los datos del body
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Para poder usar los metodos put y delete
app.use(methodOverride('_method'));

//************************************* Template Engine *************************************\\
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views/"));

const mainRouter = require("./routes/mainRouter");
app.use("/", mainRouter);


const aboutMeRouter = require("./routes/aboutMeRouter");
app.use("/", aboutMeRouter);


//************************************* Listen Server *************************************\\
const port = process.env.PORT || 3001;

app.listen(`${port}`, () => {
    console.log(`Servidor funcionando en: http://localhost:${port}`);
});

//*******************************************************************************************\\

