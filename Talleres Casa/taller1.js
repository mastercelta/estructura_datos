/**
 * Taller 1
 * @author Juan Camilo Peñaloza
 * @version 1.0
 * @description
 * 1) Definir un arreglo de 5 componentes de tipo Float que representen las alturas de 5 personas.
 *  Obtener el promedio de las mismas. Contar cuántas personas son más altas que el promedio y 
 * uántas más bajas.
   2) Crea un array llamado frutas que contenga las frutas: "manzana", "pera", "plátano", y "cereza".
    *Encontrar la posición de "plátano" en el array.
    *agregar un"mango" al final del array.
    *agregar "fresa" al inicio del array.
    *eliminar el primer elemento del array.
    *eliminar el último elemento del array.
    Al final, muestra en la consola el estado del array después de cada operación.
 */

/** Ejercicio 1 */
let arreglo = [1.70, 1.80, 1.60, 1.75, 1.65];
let suma = 0;
let promedio = 0;
let personasAltas = 0;
let personasBajas = 0;

for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
}

promedio = suma / arreglo.length;

//Comparar estaturas y buscar menor y mayor al promedio
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > promedio) {
        personasAltas++;
    } else {
        personasBajas++;
    }
}

console.log(`Promedio de las alturas: ${promedio}`);
console.log(`Personas más altas que el promedio: ${personasAltas}`);
console.log(`Personas más bajas que el promedio: ${personasBajas}`);

/* Ejercicio 2 */
let frutas = ["manzana", "pera", "plátano", "cereza"];
console.log(frutas);
console.log("--------------------------------------------------");
console.log("Encontrar la posición de 'plátano' en el array");
console.log(frutas.indexOf("plátano"));
console.log("--------------------------------------------------");
console.log("Agregar un 'mango' al final del array");
frutas.push("mango");
console.log(frutas);
console.log("--------------------------------------------------");
console.log("Agregar 'fresa' al inicio del array");
frutas.unshift("fresa");
console.log(frutas);
console.log("--------------------------------------------------");
console.log("Eliminar el primer elemento del array");
frutas.shift();
console.log(frutas);
console.log("--------------------------------------------------");
console.log("Eliminar el último elemento del array");
frutas.pop();
console.log(frutas);
console.log("--------------------------------------------------");
