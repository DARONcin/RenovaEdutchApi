const express = require('express');
const bodyParser = require('body-parser');
const horarioModule = require('./horario');
const alumnosModule = require('./alumnos');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rutas para horario escolar
app.get('/horario-escolar', (req, res) => {
  res.json(horarioModule.getHorarioEscolar());
});

app.post('/horario-escolar', (req, res) => {
  const nuevaMateria = req.body;
  res.json(horarioModule.addMateria(nuevaMateria));
});

app.put('/horario-escolar/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const materiaActualizada = req.body;
  res.json(horarioModule.updateMateria(id, materiaActualizada));
});

app.delete('/horario-escolar/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(horarioModule.deleteMateria(id));
});

// Rutas para lista de alumnos
app.get('/lista-alumnos', (req, res) => {
  res.json(alumnosModule.getListaAlumnos());
});

app.post('/lista-alumnos', (req, res) => {
  const nuevoAlumno = req.body;
  res.json(alumnosModule.addAlumno(nuevoAlumno));
});

app.put('/lista-alumnos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const alumnoActualizado = req.body;
  res.json(alumnosModule.updateAlumno(id, alumnoActualizado));
});

app.delete('/lista-alumnos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(alumnosModule.deleteAlumno(id));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
