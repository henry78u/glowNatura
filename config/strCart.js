const cartSection = document.getElementById("allCart");

// Step 1: Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Step 2: Loop through cart items and match with products
let cartHtml = '';

cart.forEach(cartItem => {
  const productId = cartItem.productId || cartItem.id; // In case your saved cart uses either

  // Match product
  const matchingProduct = product.find(prod => prod.id === productId);

  if (matchingProduct) {
    const quantity = cartItem.quantity;
    const price = matchingProduct.productPrice * 1000; // Convert to ₦
    const subtotal = quantity * price;

    // Step 3: Generate cart row HTML
    cartHtml += `
      <div class="cartRow">
        <div class="productImage">
          <img src="${matchingProduct.productImage}" alt="cart product - ${matchingProduct.productTitle}">
        </div>
        <div class="productName">
          <h6>${matchingProduct.productTitle}</h6>
        </div>
        <div class="productPrice">
          <h2>₦${price}</h2>
        </div>
        <div class="productQuality">
          <input type="number" value="${quantity}" min="1" data-id="${productId}" class="updateQuantity">
        </div>
        <div class="subtotal">
          <h2>₦${subtotal}</h2>
        </div>
        <div class="removeCart">
          <button class="removeBtn" data-id="${productId}">✖</button>
        </div>
      </div>
    `;
  }
});

// Step 4: Display in DOM
cartSection.innerHTML = cartHtml;
