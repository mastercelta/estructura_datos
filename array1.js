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