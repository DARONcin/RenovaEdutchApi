const fs = require('fs');

try {
  const data = fs.readFileSync('oxxoproducts.json', 'utf8');
  console.log('Contenido del archivo:', data);
} catch (error) {
  console.error('Error al leer el archivo de forma síncrona: ' + error);
}