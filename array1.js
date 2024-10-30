let arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);
console.log(arreglo[1]);

console.log("--------------------------------------------------");
console.log("Recorrer un array con for");

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

console.log("--------------------------------------------------");
console.log("Recorrer un array con forEach");
arreglo.forEach((elemento, indice) => {
    console.log(`Indice ${indice}: ${elemento}`);
});

console.log("--------------------------------------------------");
console.log("Agregar un elemento al final del array");
arreglo.push(8);
console.log(arreglo);

console.log("--------------------------------------------------");
console.log("Agregar un elemento al inicio del array");
arreglo.unshift(20);

console.log(arreglo);
console.log("--------------------------------------------------");
console.log("Eliminar el ultimo elemento del array");
arreglo.pop();

console.log("--------------------------------------------------");
console.log("Eliminar el primer elemento del array");
arreglo.shift();

console.log("--------------------------------------------------");
console.log("Buscar un elemento en el array");
console.log(arreglo.indexOf(3)); // 2   