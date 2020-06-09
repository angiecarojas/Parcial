"use strict";

//Importa el modelo de Alumno en /models/alumno.js
const Alumno = require("../model/alumno");

/*--------------------
---- GET ALUMNO ------
----------------------*/
function getAlumno(req, res) {
  let idAlumno = req.params.alumnoId;

  Alumno.findOne({ id: idAlumno }, (err, alumno) => {
    if (err) {
      res
        .status(500)
        .send({ message: `Error al ejecutar la petición: ${err}` });
    }
    if (!alumno) {
      res.status(404).send({ message: `No se encuentra el alumno` });
    }
    res.status(200).send({ alumno });
  });
}

/*--------------------
---- GET ALUMNOS -----
----------------------*/
function getAlumnos(req, res) {
  Alumno.find({}, (err, alumnos) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    }
    if (!alumnos) {
      return res.status(404).send({ message: `No existen alumnos` });
    }
    res.status(200).send({ alumnos });
  });
}

/*--------------------
---- SAVE ALUMNO -----
----------------------*/
function saveAlumno(req, res) {
  console.log("POST /api/alumnos");
  console.log(req.body);

  let alumno = new Alumno();
  alumno.id = req.body.id;
  alumno.nombre = req.body.nombre;
  alumno.edad = req.body.edad;

  alumno.save((err, alumnoGuardado) => {
    if (err) {
      res.status(500).send({
        message: `Error al guardar el alumno en la base de datos: ${err} `,
      });
    } else res.status(200).send({ alumno: alumnoGuardado });
  });
}

/*--------------------
---- UPDATE ALUMNO ---
----------------------*/
function updateAlumno(req, res) {
  let idAlumno = req.params.alumnoId;

  Alumno.findOne({ id: idAlumno }, (err, alumno) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: `Error al actualizar el alumno: ${err}` });
    } else {
      if (!alumno) {
        res.status(404).send({
          message: `No es posible actualizar el alumno porque no se encuentra el alumno`,
        });
      } else {
        if (req.body.nombre) {
          alumno.nombre = req.body.nombre;
        }
        if (req.body.id) {
          alumno.id = req.body.id;
        }
        if (req.body.edad) {
          alumno.edad = req.body.edad;
        }

        alumno.save((err, alumnoActualizado) => {
          if (err) {
            console.log(err);
            res
              .status(500)
              .send({ message: `Error al actualizar el alumno: ${err}` });
          } else {
            res.send(alumnoActualizado);
          }
        });
      }
    }
  });
}

/*-----------------------
----- DELETE ALUMNO -----
-------------------------*/
function deleteAlumno(req, res) {
  let idAlumno = req.params.alumnoId;

  Alumno.findOne({ id: idAlumno }, (err, alumno) => {
    if (err) {
      res.status(500).send({ message: `Error al eliminar el alumno: ${err}` });
    }
    if (!alumno) {
      res.status(404).send({
        message: `No es posible eliminar el alumno porque no se encuentra el alumno`,
      });
    }
    alumno.remove((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Error al ejecutar la petición: ${err}` });
      }
      res.status(200).send({ message: `Se ha eliminado el alumno` });
    });
  });
}

module.exports = {
  getAlumno,
  getAlumnos,
  updateAlumno,
  deleteAlumno,
  saveAlumno,
};
