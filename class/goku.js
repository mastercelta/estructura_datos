class Goku {
    constructor(name, nivel) {
        this.name = name;
        this.nivel = nivel;
    }

    mostrarTransformacion() {
        return `${this.name} esta en la transformacion: ${this.nivel}`;
    }

    transformar(nuevaTransformacion) {
        this.nivel = nuevaTransformacion;
        return `${this.name} se ha transformado a: ${this.nivel}`;
    }

    volverFormBase() {
        this.nivel = 'Base';
        return `${this.name} ha vuelto a su forma base`;
    }
}


let goku = new Goku('Goku', 'Base');

console.log(goku);

console.log(goku.mostrarTransformacion());

console.log(goku.transformar('SSJ'));

console.log(goku.mostrarTransformacion());

console.log(goku.transformar('SSJ Modo Dios'));

console.log(goku.mostrarTransformacion());