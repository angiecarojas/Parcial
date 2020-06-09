"use strict";

//Importa express
const express = require("express");
//Importa body-parser
const bodyParser = require("body-parser");
//Iniciamos express
const app = express();
//Importa la api
const api = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
//Admitir peticiones en formato JSON
app.use(bodyParser.json());
//Usamos la ruta /api junto a api (routes)
app.use('/api', api);

module.exports = app;
