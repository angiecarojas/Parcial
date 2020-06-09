"use strict";

//Importa mongoose
const mongoose = require("mongoose");
// Referenciamos la app
const app = require("./app");
//Importa el archivo de configuración
const config = require('./config');

//Crear conexión a mongodb
mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  } else console.log("Conexión establecida con la base de datos...");

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`);
  });
});
