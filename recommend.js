// recommend.js

// Use the products array from products.js (assuming it's available globally)
const recommendProducts = typeof products !== 'undefined' ? products : [
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

function getRecommendations(currentProductId, count = 3) {
  // Filter out the current product from recommendation list
  const available = recommendProducts.filter(p => p.id !== currentProductId);

  // Shuffle and return top 'count' items
  const shuffled = available.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function showRecommendations(currentProductId) {
  const container = document.getElementById("recommendations");
  container.innerHTML = "<h4>You may also like</h4>";

  const recs = getRecommendations(currentProductId);
  const row = document.createElement("div");
  row.className = "row";

  recs.forEach(product => {
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

  container.appendChild(row);
}

// Function to add to cart with visual feedback (no alerts)
function addToCartFromRecommendations(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Visual feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "✓ Added";
  button.style.background = "#28a745";
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
  }, 1000);
}
