const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";
  card.innerHTML = `
    <div class="card h-100 product-card">
      <img src="${product.image}" class="card-img-top product-image" alt="${product.name}" onclick="showImageSlideshow(${product.id})" style="cursor: pointer;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">₹${product.price}</p>
        <button class="btn btn-primary mt-auto" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    </div>
  `;
  productList.appendChild(card);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Optional: Show a subtle visual feedback instead of alert
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "✓ Added";
  button.style.background = "#28a745";
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
  }, 1000);
}
