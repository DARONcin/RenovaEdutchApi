// horario.js
let horarioEscolar = [
    { id: 1, materia: 'Matemáticas', hora: '08:00 AM - 09:30 AM' },
    { id: 2, materia: 'Historia', hora: '10:00 AM - 11:30 AM' },
  ];
  
  exports.getHorarioEscolar = () => {
    return horarioEscolar;
  };
  
  exports.addMateria = (nuevaMateria) => {
    horarioEscolar.push(nuevaMateria);
    return nuevaMateria;
  };
  
  exports.updateMateria = (id, materiaActualizada) => {
    horarioEscolar = horarioEscolar.map((materia) =>
      materia.id === id ? materiaActualizada : materia
    );
    return materiaActualizada;
  };
  
  exports.deleteMateria = (id) => {
    horarioEscolar = horarioEscolar.filter((materia) => materia.id !== id);
    return { message: 'Materia eliminada correctamente' };
  };
  