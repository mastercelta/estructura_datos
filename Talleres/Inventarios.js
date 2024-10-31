/**
 * Taller Inventarios
 * @autor Juan Camilo Peñaloza
 * @version 1.0
 * @description
 * Ejercicio 1: Gestión de Inventario de Tienda
   Descripción: Crea un objeto que represente una tienda con varios productos.
   Cada producto debe tener propiedades como nombre, precio y cantidad. Luego, crea funciones para agregar productos, actualizar la cantidad de productos y mostrar la información de todos los productos.
 */

//Objeto tienda

const tienda = {
    nombre: 'Tienda de ropa',
    descripcion: 'Tienda de ropa para hombres y mujeres',
    productos: [
        { nombre: 'Camisa', precio: 50000, cantidad: 10 },
        { nombre: 'Pantalón', precio: 80000, cantidad: 5 },
        { nombre: 'Zapatos', precio: 120000, cantidad: 3 }
    ],
    //Agregar un producto
    agregarProducto: (nombre, precio, cantidad) => {
        tienda.productos.push({ nombre, precio, cantidad });
    },
    //Actualizar la cantidad de productos
    actualizarCantidad: (nombre, cantidad) => {
        for (let i = 0; i < tienda.productos.length; i++) {
            if (tienda.productos[i].nombre === nombre) {
                tienda.productos[i].cantidad = cantidad;
            }
        }
    },
    //Mostrar la información de todos los productos
    mostrarProductos: () => {
        console.table(tienda.productos);
        // for (let i = 0; i < tienda.productos.length; i++) {
        //     console.log(`Nombre: ${tienda.productos[i].nombre} Precio: ${tienda.productos[i].precio} Cantidad: ${tienda.productos[i].cantidad}`);
        // }
    },
    //Eliminar un producto
    eliminarProducto: (nombre) => {
        for (let i = 0; i < tienda.productos.length; i++) {
            if (tienda.productos[i].nombre === nombre) {
                tienda.productos.splice(i, 1);
            }
        }
    }
};

//Inicializar la tienda
let activar = true;
//Inicializar promps
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Preguntar si quiere salir

console.log('Agregando producto inicial...');
tienda.agregarProducto('Chaqueta', 150000, 2);

console.log('Actualizando cantidad de producto inicial...');
tienda.actualizarCantidad('Chaqueta', 5);

const abrirTienda = () => {
    console.log(`Bienvenido a la tienda ${tienda.nombre}`);
    console.log(tienda.descripcion);

    mostrarMenu();

}

const salirdeTienda = () => {
    rl.question('¿Desea salir de la tienda? (s/n)', (option) => {
        if (option === 's') {
            rl.close();
        } else {
            mostrarMenu();
        }
    });
}

const mostrarMenu = () => {
    console.log('\n--- Menú ---');
    console.log('1. Agregar producto');
    console.log('2. Actualizar cantidad de producto');
    console.log('3. Mostrar productos');
    console.log('4. Eliminar producto');
    console.log('5. Salir');

    rl.question('Elige una opción: ', manejarOpcion);

}

const manejarOpcion = (option) => {
    switch (option) {
        case '1':
            agregarProducto();
            break;
        case '2':
            actualizarCantidad();
            break;
        case '3':
            mostrarProductos();
            break;
        case '4':
            eliminarProducto();
            break;
        case '5':
            salirdeTienda();
            break;
        default:
            console.log('Opción no válida.');
            mostrarMenu();
            break;
    }
}

const agregarProducto = () => {
    rl.question('Nombre del producto: ', nombre => {
        if (buscarProductoValidar(nombre)) {
            console.log('El producto ya existe');
            mostrarMenu();
            return;
        }
        rl.question('Precio del producto: ', precio => {
            rl.question('Cantidad del producto: ', cantidad => {
                tienda.agregarProducto(nombre, parseInt(precio), parseInt(cantidad));
                console.log('Producto agregado correctamente.');
                mostrarMenu();
            });
        });
    });
}

const actualizarCantidad = () => {
    rl.question('Nombre del producto: ', nombre => {
        if (buscarProductoValidar(nombre)) {
            rl.question('Nueva cantidad del producto: ', cantidad => {
                tienda.actualizarCantidad(nombre, parseInt(cantidad));
                console.log('Cantidad actualizada correctamente.');
                mostrarMenu();
            });
        }
    });
}

const mostrarProductos = () => {
    tienda.mostrarProductos();
    mostrarMenu();
}

const eliminarProducto = () => {

    rl.question('Nombre del producto a eliminar: ', nombre => {
        if (buscarProductoValidar(nombre)) {
            tienda.eliminarProducto(nombre);
            console.log('Producto eliminado correctamente.');
            mostrarMenu();

        } else mostrarMenu();
    });
}

const buscarProductoValidar = (nombre) => {
    const producto = tienda.productos.find(producto => producto.nombre === nombre);
    if (!producto) {
        console.log('Producto no encontrado');
        return false;
    }
    return producto;
}

abrirTienda();


