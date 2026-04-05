let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    displayCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.product} - ₹${item.price} 
        <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Checkout successful! Total = ₹" + total);
        cart = [];
        total = 0;
        displayCart();
    }
}
