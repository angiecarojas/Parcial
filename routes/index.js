'use strict'

const express = require('express')
const almunoCtrl = require('../controllers/alumno');
const api = express.Router();

//PETICION GET
api.get("/alumnos", almunoCtrl.getAlumnos);
//PETICION GET PARA UN ALUMNO
api.get("/alumnos/:alumnoId", almunoCtrl.getAlumno);
//PETICION POST PARA AÑADIR ALUMNOS
api.post("/alumnos", almunoCtrl.saveAlumno);
//PETICION PUT PARA HACER ACTUALIZACIONES
api.put("alumnos/:alumnoId", almunoCtrl.updateAlumno);
//PETICION DELETE PARA BORRAR UN ALUMNO
api.delete("/alumnos/:alumnoId", almunoCtrl.deleteAlumno);

module.exports = api;