//Crea una clase empleado con atributos nombre, salario y puesto y métodos para incrementar el salario y mostrar los datos del empleado.

class Empleado {
    constructor(nombre, salario, puesto) {
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }

    incrementarSalario(incremento) {
        this.salario += incremento;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre} Salario: ${this.salario} Puesto: ${this.puesto}`;
    }
}

let empleado = new Empleado('Juan', 1000000, 'Gerente');

console.log(empleado.mostrarDatos());

empleado.incrementarSalario(500000);

console.log(empleado.mostrarDatos());
