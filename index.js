const express = require('express');
const app = express();
app.use(express.json());

let oxxoProducts = [];
let cafeteriaMenu = [];

const fs = require('fs');

try {
  const dataOxxo = fs.readFileSync('oxxoproducts.json', 'utf8');
  oxxoProducts = JSON.parse(dataOxxo);
  console.log('Productos de OXXO:', oxxoProducts);

  const dataCafeteria = fs.readFileSync('cafeteriaMenu.json', 'utf8');
  cafeteriaMenu = JSON.parse(dataCafeteria);
  console.log('Menú de la cafetería:', cafeteriaMenu);
} catch (error) {
  console.error('Error al leer el archivo de forma síncrona: ' + error);
}

// Exportar datos de productos de OXXO a un archivo JSON
const jsonDataOxxo = JSON.stringify(oxxoProducts, null, 2);
fs.writeFile('nuevoOxxoProducts.json', jsonDataOxxo, 'utf8', (err) => {
  if (err) {
    console.error('Error al escribir en el archivo de productos de OXXO: ' + err);
  } else {
    console.log('Datos de productos de OXXO exportados correctamente');
  }
});

// Exportar datos del menú de la cafetería a un archivo JSON
const jsonDataCafeteria = JSON.stringify(cafeteriaMenu, null, 2);
fs.writeFile('nuevoCafeteriaMenu.json', jsonDataCafeteria, 'utf8', (err) => {
  if (err) {
    console.error('Error al escribir en el archivo del menú de la cafetería: ' + err);
  } else {
    console.log('Datos del menú de la cafetería exportados correctamente');
  }
});

// Ruta para los precios de productos en OXXO
app.get('/oxxo/products', (req, res) => {
  res.json(oxxoProducts);
});

app.post('/oxxo/products', (req, res) => {
  // Lógica para agregar un nuevo producto a la lista
  const newProduct = req.body; // Suponiendo que el cuerpo de la solicitud contiene los datos del nuevo producto
  newProduct.id = oxxoProducts.length;
  oxxoProducts.push(newProduct);
  res.status(201).json(newProduct); // Devuelve el producto recién creado con el código de estado 201 (Created)
});

app.put('/oxxo/products/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;

  const productIndex = oxxoProducts.findIndex(product => product.id === parseInt(productId));

  if (productIndex !== -1) {
    oxxoProducts[productIndex] = {
      ...oxxoProducts[productIndex],
      ...updatedProduct
    };
    res.json(oxxoProducts[productIndex]);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.delete('/oxxo/products/:id', (req, res) => {
  const productId = req.params.id; // Obtener el ID del producto de los parámetros de la ruta

  // Buscar el índice del producto en el array oxxoProducts
  const productIndex = oxxoProducts.findIndex(product => product.id === parseInt(productId));

  if (productIndex !== -1) {
    // Eliminar el producto del array oxxoProducts
    const deletedProduct = oxxoProducts.splice(productIndex, 1)[0];
    res.json(deletedProduct); // Devolver el producto eliminado
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

// Ruta para la cafetería de la escuela
app.get('/school/cafeteria', (req, res) => {
  res.json(cafeteriaMenu);
});

app.post('/cafeteria/menu', (req, res) => {
  const newItem = req.body;

  // Agregar el nuevo ítem al array del menú
  cafeteriaMenu.push(newItem);

  res.status(201).json(newItem);
});

app.put('/school/cafeteria/:id', (req, res) => {
  const itemId = req.params.id; // Obtener el ID del ítem del menú de los parámetros de la ruta
  const updatedItem = req.body; // Suponiendo que el cuerpo de la solicitud contiene los datos actualizados del ítem del menú

  // Buscar el índice del ítem del menú en el array cafeteriaMenu
  const itemIndex = cafeteriaMenu.findIndex(item => item.id === parseInt(itemId));

  if (itemIndex !== -1) {
    // Actualizar el ítem del menú en el array cafeteriaMenu
    cafeteriaMenu[itemIndex] = { ...cafeteriaMenu[itemIndex], ...updatedItem };
    res.json(cafeteriaMenu[itemIndex]); // Devolver el ítem del menú actualizado
  } else {
    res.status(404).json({ message: 'Ítem del menú no encontrado' });
  }
});

app.delete('/school/cafeteria/:id', (req, res) => {
  const itemId = req.params.id; // Obtener el ID del ítem del menú de los parámetros de la ruta

  // Buscar el índice del ítem del menú en el array cafeteriaMenu
  const itemIndex = cafeteriaMenu.findIndex(item => item.id === parseInt(itemId));

  if (itemIndex !== -1) {
    // Eliminar el ítem del menú del array cafeteriaMenu
    const deletedItem = cafeteriaMenu.splice(itemIndex, 1)[0];
    res.json(deletedItem); // Devolver el ítem del menú eliminado
  } else {
    res.status(404).json({ message: 'Ítem del menú no encontrado' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
