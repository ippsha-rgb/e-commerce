const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 499,
    image: "https://tse4.mm.bing.net/th/id/OIP.WfVGGPmVQoUw_EtZ0Dv3AAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "clothing",
    images: [
      "https://tse4.mm.bing.net/th/id/OIP.WfVGGPmVQoUw_EtZ0Dv3AAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Nike Sneakers",
    price: 1299,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cbddd67b-444b-4a7c-b458-20643ab89b1b/custom-nike-dunk-high-by-you-shoes.png",
    category: "shoes",
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cbddd67b-444b-4a7c-b458-20643ab89b1b/custom-nike-dunk-high-by-you-shoes.png",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Travel Backpack",
    price: 899,
    image: "https://tse1.mm.bing.net/th/id/OIP.s0Cz2oi2viEEpPMiEHftmgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "accessories",
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.s0Cz2oi2viEEpPMiEHftmgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 6,
    name: "Denim Jeans",
    price: 799,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    category: "clothing",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa117b5f8561?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 7,
    name: "Leather Jacket",
    price: 1899,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "clothing",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-4d85c41c4b1c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 1699,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    category: "shoes" ,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    ]
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 399,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    category: "accessories" ,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 10,
    name: "Laptop Bag",
    price: 699,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 11,
    name: "Hoodie",
    price: 599,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    category: "clothing",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 12,
    name: "Casual Shirt",
    price: 449,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
    category: "clothing",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
    ]
  }
];

// Function to create and show image slideshow modal
function showImageSlideshow(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !product.images) return;

  // Create modal HTML
  const modalHTML = `
    <div id="imageModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3>${product.name}</h3>
          <button class="close-btn" onclick="closeModal()">&times;</button>
        </div>
        <div class="slideshow-container">
          <div class="slide-wrapper">
            <img id="slideImage" src="${product.images[0]}" alt="${product.name}">
          </div>
          <button class="slide-btn prev" onclick="changeSlide(-1)">&#10094;</button>
          <button class="slide-btn next" onclick="changeSlide(1)">&#10095;</button>
        </div>
        <div class="slide-dots">
          ${product.images.map((_, index) => `<span class="dot ${index === 0 ? 'active' : ''}" onclick="currentSlide(${index})"></span>`).join('')}
        </div>
      </div>
    </div>
  `;

  // Add modal to body
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Store current slide index
  window.currentSlideIndex = 0;
  window.currentProductImages = product.images;
}

// Function to change slide
function changeSlide(direction) {
  const images = window.currentProductImages;
  window.currentSlideIndex = (window.currentSlideIndex + direction + images.length) % images.length;
  updateSlide();
}

// Function to go to specific slide
function currentSlide(index) {
  window.currentSlideIndex = index;
  updateSlide();
}

// Function to update slide display
function updateSlide() {
  const slideImage = document.getElementById('slideImage');
  const dots = document.querySelectorAll('.dot');
  const images = window.currentProductImages;
  
  slideImage.src = images[window.currentSlideIndex];
  
  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === window.currentSlideIndex);
  });
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.remove();
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('imageModal');
  if (event.target === modal) {
    closeModal();
  }
});

