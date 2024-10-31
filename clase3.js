//Objetos
const persona = {
    nombre: 'Juan',
    edad: 25,
    trabaja:true,
    //Agregar una función para saludar
    saludar: () => {
        console.log(`Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años`);
    }
};

//Imprimir el objeto
console.log(persona);
//Imprimir una propiedad del objeto

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.trabaja);

//Agregar propiedades al objeto
persona.carrera = "Ingeniería en sistemas";
console.log(persona);

//saludar
persona.saludar();

//Eliminar una propiedad del objeto
delete persona.trabaja;
console.log(persona);

//Existe el atributo en el objeto
console.log(persona.hasOwnProperty('nombre'));
//No existe
console.log(persona.hasOwnProperty('apellido'));