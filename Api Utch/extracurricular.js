// extracurricular.js
const express = require('express');
const bodyParser = require('body-parser');

const extracurricularApp = express();
extracurricularApp.use(bodyParser.json());

let extracurricularActivities = [];

// Obtener todas las actividades extracurriculares (GET)
extracurricularApp.get('/', (req, res) => {
  res.json({ activities: extracurricularActivities });
});

// Agregar una nueva actividad extracurricular (POST)
extracurricularApp.post('/', (req, res) => {
  const newActivity = req.body.activity;
  extracurricularActivities.push(newActivity);
  res.json({ message: 'Actividad extracurricular agregada correctamente' });
});

// Actualizar una actividad extracurricular (PUT)
extracurricularApp.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedActivity = req.body.activity;

  extracurricularActivities[id] = updatedActivity;
  res.json({ message: 'Actividad extracurricular actualizada correctamente' });
});

// Eliminar una actividad extracurricular (DELETE)
extracurricularApp.delete('/:id', (req, res) => {
  const id = req.params.id;
  extracurricularActivities.splice(id, 1);
  res.json({ message: 'Actividad extracurricular eliminada correctamente' });
});

module.exports = extracurricularApp;
