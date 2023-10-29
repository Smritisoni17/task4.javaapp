document.getElementById('addToCart').addEventListener('click', addToCart);

function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerKg = 350;
    const total = quantity * pricePerKg;
    alert(`Added ${quantity} kg to your cart. Total: ₹${total}`);
}