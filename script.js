function cambiarCantidad(productoId, cambio) {
    const cantidadSpan = document.getElementById(`cantidad-${productoId}`);
    let cantidad = parseInt(cantidadSpan.textContent);
    cantidad += cambio;
    if (cantidad < 1) cantidad = 1;
    cantidadSpan.textContent = cantidad;
    actualizarResumen();
  }
  
  function actualizarResumen() {
    const productos = document.querySelectorAll('.producto');
    let subtotal = 0;
    productos.forEach(producto => {
      if (producto.querySelector('.checkbox-producto').checked) {
        const precio = parseFloat(producto.querySelector('.precio').textContent);
        const cantidad = parseInt(producto.querySelector('span[id^="cantidad"]').textContent);
        subtotal += precio * cantidad;
      }
    });
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total').textContent = subtotal.toFixed(2);
  }
  
  function borrarSeleccionados() {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
      if (producto.querySelector('.checkbox-producto').checked) {
        producto.remove();
      }
    });
    actualizarResumen();
    actualizarContador();
  }
  
  function actualizarContador() {
    const productos = document.querySelectorAll('.producto').length;
    document.getElementById('total-items').textContent = productos;
  }
  
  document.getElementById('seleccionar-todo').addEventListener('change', function() {
    const checked = this.checked;
    document.querySelectorAll('.checkbox-producto').forEach(cb => {
      cb.checked = checked;
    });
    actualizarResumen();
  });
  
  function continuar() {
    alert('¡Continuando al pago!');
  }
  