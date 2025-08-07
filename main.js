function renderProducts(productsToRender) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  if (productsToRender.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

 productsToRender.forEach(product => {
  const div = document.createElement("div");
  div.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4"; // ✅ Responsive grid
  div.innerHTML = `
    <div class="card h-100 shadow-sm">
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 250px; object-fit: cover;">
      </a>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">
          <a href="product.html?id=${product.id}" class="text-decoration-none text-dark">${product.name}</a>
        </h5>
        <p class="card-text text-muted">₹${product.price}</p>
        <div class="mt-auto">
          <button class="btn btn-primary w-100 mb-2" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn btn-success w-100" onclick="addToCartAndCheckout(${product.id})">Buy Now</button>
        </div>
      </div>
    </div>
  `;
  container.appendChild(div);
});
}

function filterProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const selectedCategory = document.getElementById("categoryFilter").value;

  const filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

function addToCart(id) {
  try {
    console.log("Adding to cart:", id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.qty += 1;
      console.log("Updated existing item quantity");
    } else {
      cart.push({ id: id, qty: 1 });
      console.log("Added new item to cart");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart saved to localStorage:", cart);
    
    if (typeof saveCartToFirebase === 'function') {
      saveCartToFirebase();
      console.log("Cart synced to Firebase");
    }
    
    updateCartCount();

    // Optional: Show a subtle visual feedback instead of alert
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = "✓ Added";
    button.style.background = "#28a745";
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
    }, 1000);

    // ✅ Update cart count badge
    updateCartCount();
    console.log("Cart updated successfully");
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}

function addToCartAndCheckout(id) {
  try {
    console.log("Adding to cart and checking out:", id);
    
    // First add to cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ id: id, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    
    if (typeof saveCartToFirebase === 'function') {
      saveCartToFirebase();
    }
    
    updateCartCount();
    
    // Show visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = "✓ Added";
    button.style.background = "#28a745";
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
    }, 500);
    
    // Redirect to checkout after a short delay
    setTimeout(() => {
      window.location.href = "checkout.html";
    }, 600);
    
    console.log("Item added and redirecting to checkout");
  } catch (error) {
    console.error("Error adding to cart and checking out:", error);
  }
}

// ✅ Place this function anywhere (after or before the others)
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = totalItems;
  }
}

// ✅ Call once when the page loads
window.onload = () => {
  updateCartCount();
  renderProducts(products); // Initial render of all products
};

