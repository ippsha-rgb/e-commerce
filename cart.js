const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

// Use the products array from products.js (assuming it's available globally)
// If not available, we'll use a fallback
const cartProducts = typeof products !== 'undefined' ? products : [
  { id: 1, name: "Classic T-Shirt", price: 499, image: "https://tse4.mm.bing.net/th/id/OIP.WfVGGPmVQoUw_EtZ0Dv3AAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 2, name: "Nike Sneakers", price: 1299, image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cbddd67b-444b-4a7c-b458-20643ab89b1b/custom-nike-dunk-high-by-you-shoes.png" },
  { id: 3, name: "Travel Backpack", price: 899, image: "https://tse1.mm.bing.net/th/id/OIP.s0Cz2oi2viEEpPMiEHftmgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 4, name: "Wireless Headphones", price: 1499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop" },
  { id: 5, name: "Smart Watch", price: 2499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop" },
  { id: 6, name: "Denim Jeans", price: 799, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop" },
  { id: 7, name: "Leather Jacket", price: 1899, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop" },
  { id: 8, name: "Running Shoes", price: 1699, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop" },
  { id: 9, name: "Sunglasses", price: 399, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop" },
  { id: 10, name: "Laptop Bag", price: 699, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop" },
  { id: 11, name: "Hoodie", price: 599, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop" },
  { id: 12, name: "Casual Shirt", price: 449, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop" }
];

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceEl.textContent = "Total: ₹0";
    return;
  }

  cart.forEach((item, index) => {
    const product = cartProducts.find(p => p.id === item.id);
    if (!product) return; // Skip if product not found
    
    const itemTotal = product.price * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "card p-3 mb-3 cart-item";
    div.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div style="display: flex; align-items: center; gap: 1em;">
          <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
          <div>
            <h5>${product.name}</h5>
            <p>₹${product.price} × ${item.qty} = ₹${itemTotal}</p>
          </div>
        </div>
        <div>
          <button class="btn btn-sm btn-secondary" onclick="changeQty(${index}, -1)">−</button>
          <button class="btn btn-sm btn-secondary" onclick="changeQty(${index}, 1)">+</button>
          <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  totalPriceEl.textContent = `Total: ₹${total}`;
}

function changeQty(index, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  
  // Visual feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = delta > 0 ? "✓" : "✓";
  button.style.background = delta > 0 ? "#28a745" : "#dc3545";
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
  }, 500);
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  
  // Visual feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "✓ Removed";
  button.style.background = "#dc3545";
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
  }, 1000);
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
  
  // Visual feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "✓ Cleared";
  button.style.background = "#dc3545";
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
  }, 1000);
}

// Function to show recommendations based on cart items
function showRecommendationsFromCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) return;
  
  // Get unique product IDs from cart
  const cartProductIds = [...new Set(cart.map(item => item.id))];
  
  // Get recommendations based on cart items
  const recommendations = cartProducts.filter(product => 
    !cartProductIds.includes(product.id)
  ).slice(0, 3);
  
  const recommendationsContainer = document.getElementById("recommendations");
  if (!recommendationsContainer) return;
  
  recommendationsContainer.innerHTML = "<h4>You may also like</h4>";
  
  const row = document.createElement("div");
  row.className = "row";
  
  recommendations.forEach(product => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";
    card.innerHTML = `
      <div class="card product-card">
        <img src="${product.image}" class="card-img-top product-image" alt="${product.name}" onclick="showImageSlideshow(${product.id})" style="cursor: pointer;">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">₹${product.price}</p>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    row.appendChild(card);
  });
  
  recommendationsContainer.appendChild(row);
}

window.onload = () => {
  loadCart();
  showRecommendationsFromCart();
};

