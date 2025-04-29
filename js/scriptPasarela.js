let quantity = 1;
let metodoPago = "PayPal";

function updateUI() {
  const itemPrice = 88;
  const subtotal = itemPrice * quantity;
  const tax = subtotal * 0.18;
  const shipping = parseFloat(document.querySelector('input[name="shipping"]:checked').value);
  const total = subtotal + tax + shipping;

  document.getElementById("qty").textContent = quantity;
  document.getElementById("item-total").textContent = `S/ ${subtotal.toFixed(2)}`;
  document.getElementById("subtotal").textContent = `S/ ${subtotal.toFixed(2)}`;
  document.getElementById("tax").textContent = `S/ ${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `S/ ${total.toFixed(2)}`;
}

function changeQuantity(delta) {
  quantity = Math.max(1, quantity + delta);
  updateUI();
}

function updateTotal() {
  updateUI();
}

function deleteItem() {
  alert("Producto eliminado del carrito.");
}

function selectMetodo(metodo) {
  metodoPago = metodo;
  alert(`Método de pago seleccionado: ${metodo}`);
}

function procesarPago() {
  alert(`Procesando pago con ${metodoPago}...`);
  setTimeout(() => {
    window.location.href = "ticket.html";
  }, 1000);
}

// Inicializa
updateUI();
