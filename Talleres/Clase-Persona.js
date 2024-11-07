//Crear una clase con propiedades nombre y edad de una persona mostrar datos cargados y un mensjae si es mayor de edad

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre} Edad: ${this.edad}`;
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `La persona es mayor de edad`;
        } else {
            return `La persona es menor de edad`;
        }
    }
}

let persona = new Persona('Juan', 25);

console.log(persona.mostrarDatos());

console.log(persona.esMayorDeEdad());
