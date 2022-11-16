function ingresarUsuario() {
    let nombre = prompt("Ingrese su nombre :")
    let apellido = prompt("Ingrese su apellido :")
    alert("Bienvenido/a " + nombre + " " + apellido)
}
ingresarUsuario()



const productos = [
    { id: 1001, categoria: "Perifericos", nombre: "Teclado", precio: 12600, stock: 20 },
    { id: 1002, categoria: "Perifericos", nombre: "Mouse Logitech", precio: 7500, stock: 10 },
    { id: 1003, categoria: "Perifericos", nombre: "Auriculares", precio: 19500, stock: 10 },
    { id: 1004, categoria: "Perifericos", nombre: "Teclado Mecanico", precio: 23000, stock: 8 },
    { id: 1005, categoria: "Perifericos", nombre: "Mousepad", precio: 2200, stock: 20 },
    { id: 1006, categoria: "Perifericos", nombre: "Mouse Gamer", precio: 2600, stock: 0 },
    { id: 1007, categoria: "Sillas", nombre: "Silla Gamer Negra", precio: 65000, stock: 10 },
    { id: 1008, categoria: "Sillas", nombre: "Silla Gamer Roja", precio: 60000, stock: 0 },
    { id: 1009, categoria: "Monitores", nombre: "Monitor Samsung", precio: 52000, stock: 15 },
    { id: 1010, categoria: "Monitores", nombre: "Monitor LG", precio: 57000, stock: 18 },
]



let seleccionarCategoria = prompt("Seleccione que catogria desea ver: \n-Perifericos\n-Sillas\n-Monitores")
let buscarProducto = productos.filter(producto => producto.categoria === (seleccionarCategoria))

let salida = " "
for (const producto of buscarProducto) {
    salida = salida + producto.nombre + "\n"
}
alert("Seleccione que producto desea" + "\n" + salida)



let seleccionarProducto = prompt("Elija producto")
let productoBuscado = productos.filter(producto => producto.nombre === (seleccionarProducto))

let elegirProducto = " "
for (const producto of productoBuscado) {
    elegirProducto = elegirProducto + "El precio del producto es: " + "$ " + producto.precio + "\n" + "Stock Disponible " + producto.stock
}
alert(elegirProducto)