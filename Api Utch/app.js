// app.js
const express = require('express');
const extracurricularApp = require('./extracurricular');
const libraryApp = require('./library');

const app = express();
const PORT = 3000;

app.use('/extracurricular', extracurricularApp);
app.use('/library', libraryApp);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
