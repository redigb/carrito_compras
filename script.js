let carrito = [];
let total = 0;

function agregarAlCarrito(nombreProducto, descripcionProducto, precioProducto, imagenProducto) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

    if (productoExistente) {
        // Si el producto ya está en el carrito, solo incrementamos la cantidad
        productoExistente.cantidad++;
    } else {
        // Si no está en el carrito, lo agregamos
        carrito.push({
            nombre: nombreProducto,
            descripcion: descripcionProducto,
            precio: precioProducto,
            cantidad: 1,
            imagen: imagenProducto
        });
    }

    // Actualizar la lista de productos en el carrito
    actualizarCarrito();

    // Actualizar el total
    total += precioProducto;
    document.getElementById('total').innerText = total.toFixed(2);
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista

    carrito.forEach(producto => {
        let li = document.createElement('li');
        li.innerHTML = `
            <div>
                <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; margin-right: 10px;">
                <strong>${producto.nombre}</strong><br>
                ${producto.descripcion}<br>
                Precio: S/ ${producto.precio.toFixed(2)} x ${producto.cantidad} = S/ ${(producto.precio * producto.cantidad).toFixed(2)}
            </div>
            <button onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</button>
        `;
        listaCarrito.appendChild(li);
    });
}

function eliminarDelCarrito(nombreProducto) {
    const index = carrito.findIndex(producto => producto.nombre === nombreProducto);

    if (index > -1) {
        // Restar el precio del producto del total
        total -= carrito[index].precio * carrito[index].cantidad;

        // Eliminar el producto del carrito
        carrito.splice(index, 1);

        // Actualizar el carrito y el total
        actualizarCarrito();
        document.getElementById('total').innerText = total.toFixed(2);
    }
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    document.getElementById('total').innerText = total.toFixed(2);
    actualizarCarrito();
}

function comprar() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. No puedes proceder con la compra.");
    } else {
        // Aquí puedes agregar la lógica para finalizar la compra (por ejemplo, redirigir al usuario a una página de pago)
        alert("¡Gracias por tu compra! El total es S/ " + total.toFixed(2));
        // Vaciar el carrito después de la compra
        vaciarCarrito();
    }
}
