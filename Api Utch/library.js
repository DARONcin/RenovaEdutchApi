// library.js
const express = require('express');
const bodyParser = require('body-parser');

const libraryApp = express();
libraryApp.use(bodyParser.json());

let libraryBooks = [];

// Obtener todos los libros de la biblioteca (GET)
libraryApp.get('/', (req, res) => {
  res.json({ books: libraryBooks });
});

// Agregar un nuevo libro a la biblioteca (POST)
libraryApp.post('/', (req, res) => {
  const newBook = req.body.book;
  libraryBooks.push(newBook);
  res.json({ message: 'Libro agregado correctamente' });
});

// Actualizar un libro de la biblioteca (PUT)
libraryApp.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedBook = req.body.book;

  libraryBooks[id] = updatedBook;
  res.json({ message: 'Libro actualizado correctamente' });
});

// Eliminar un libro de la biblioteca (DELETE)
libraryApp.delete('/:id', (req, res) => {
  const id = req.params.id;
  libraryBooks.splice(id, 1);
  res.json({ message: 'Libro eliminado correctamente' });
});

module.exports = libraryApp;
