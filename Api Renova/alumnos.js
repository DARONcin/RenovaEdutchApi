// alumnos.js
let listaAlumnos = [
    { id: 1, nombre: 'Juan', edad: 15 },
    { id: 2, nombre: 'María', edad: 16 },
  ];
  
  exports.getListaAlumnos = () => {
    return listaAlumnos;
  };
  
  exports.addAlumno = (nuevoAlumno) => {
    listaAlumnos.push(nuevoAlumno);
    return nuevoAlumno;
  };
  
  exports.updateAlumno = (id, alumnoActualizado) => {
    listaAlumnos = listaAlumnos.map((alumno) =>
      alumno.id === id ? alumnoActualizado : alumno
    );
    return alumnoActualizado;
  };
  
  exports.deleteAlumno = (id) => {
    listaAlumnos = listaAlumnos.filter((alumno) => alumno.id !== id);
    return { message: 'Alumno eliminado correctamente' };
  };
  