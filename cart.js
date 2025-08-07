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

// Test function to verify cart functionality
function testCart() {
  console.log("Testing cart functionality...");
  console.log("Cart container:", cartContainer);
  console.log("Total price element:", totalPriceEl);
  console.log("Products available:", cartProducts.length);
  
  // Test adding an item
  let testCart = [{ id: 1, qty: 2 }, { id: 2, qty: 1 }];
  localStorage.setItem("cart", JSON.stringify(testCart));
  loadCart();
}

// Enhanced loadCart function with better error handling
function loadCart() {
  try {
    console.log("Loading cart...");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Cart data:", cart);
    
    if (!cartContainer) {
      console.error("Cart container not found!");
      return;
    }
    
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartContainer.innerHTML = `
        <div class="text-center py-5">
          <h4>🛒 Your cart is empty</h4>
          <p class="text-muted">Add some products to get started!</p>
          <a href="index.html" class="btn btn-primary">Continue Shopping</a>
        </div>
      `;
      if (totalPriceEl) totalPriceEl.textContent = "Total: ₹0";
      return;
    }

    cart.forEach((item, index) => {
      const product = cartProducts.find(p => p.id === item.id);
      if (!product) {
        console.warn(`Product with id ${item.id} not found`);
        return; // Skip if product not found
      }
      
      const itemTotal = product.price * item.qty;
      total += itemTotal;

      const div = document.createElement("div");
      div.className = "card p-3 mb-3 cart-item shadow-sm";
      div.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <div style="display: flex; align-items: center; gap: 1em;">
            <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.07);">
            <div>
              <h5 class="mb-1">${product.name}</h5>
              <p class="mb-0 text-muted">₹${product.price} × ${item.qty} = ₹${itemTotal}</p>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)" title="Decrease quantity">−</button>
            <span class="badge bg-primary">${item.qty}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, 1)" title="Increase quantity">+</button>
            <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})" title="Remove item">🗑️</button>
          </div>
        </div>
      `;
      cartContainer.appendChild(div);
    });

    if (totalPriceEl) totalPriceEl.textContent = `Total: ₹${total}`;
    console.log("Cart loaded successfully with", cart.length, "items");
  } catch (error) {
    console.error("Error loading cart:", error);
  }
}

function changeQty(index, delta) {
  try {
    console.log('Changing quantity:', index, delta);
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
    
    console.log('Quantity updated successfully');
  } catch (error) {
    console.error('Error changing quantity:', error);
  }
}

function removeItem(index) {
  try {
    console.log('Removing item:', index);
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
    
    console.log('Item removed successfully');
  } catch (error) {
    console.error('Error removing item:', error);
  }
}

function clearCart() {
  try {
    console.log('Clearing cart');
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
    
    console.log('Cart cleared successfully');
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
}

// ✅ Add this to update the cart badge
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = totalItems;
  }
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
  updateCartCount();
showRecommendationsFromCart();
};
