"use strict";

//Importa mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define el Schema del alumno que tiene id, nombre y edad
const AlumnoSchema = Schema({
  id: Number,
  nombre: String,
  edad: Number,
});

//Crea el modelo y lo exporta
module.exports = mongoose.model("Alumno", AlumnoSchema);
