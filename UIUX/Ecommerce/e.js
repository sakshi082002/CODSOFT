// Dummy product data (replace with actual product data)
const products = [
    { id: 1, category: 'electronics', name: 'Laptop', price: 999.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\laptop.jpg' },
    { id: 2, category: 'electronics', name: 'Smartphone', price: 499.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\smartphone.jpg' },
    { id: 3, category: 'electronics', name: 'Tablet', price: 299.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\pad.jpg' },
    { id: 4, category: 'men-clothing', name: 'Men T-Shirt', price: 19.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\mshirt.jpg' },
    { id: 5, category: 'men-clothing', name: 'Men Jeans', price: 39.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\mjeans.jpg' },
    { id: 6, category: 'women-clothing', name: 'Women T-Shirt', price: 14.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\wshirt.jpg' },
    { id: 7, category: 'women-clothing', name: 'Women Jeans', price: 29.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\wjeans.jpg' },
    { id: 8, category: 'kids-clothing', name: 'Kids T-Shirt', price: 9.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\kshirt.jpg' },
    { id: 9, category: 'kids-clothing', name: 'Kids Jeans', price: 19.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\kjeans.jpg' },
    { id: 10, category: 'cosmetics', name: 'Lipstick', price: 7.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\lip.jpg' },
    { id: 11, category: 'cosmetics', name: 'Mascara', price: 9.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\Ecommerce\\images\\mascara.jpg' }
  ];
  
  // Initialize cart and wishlist arrays
  let cart = [];
  let wishlist = [];
  
  

// Function to add product to cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (product) {
    cart.push(product);
    displayMessage('Product added to cart', 'success');
  } else {
    displayMessage('Product not found', 'error');
  }
}

// Function to add product to wishlist
function addToWishlist(productId) {
  const product = products.find(item => item.id === productId);
  if (product) {
    wishlist.push(product);
    displayMessage('Product added to wishlist', 'success');
  } else {
    displayMessage('Product not found', 'error');
  }
}

// Function to display messages
function displayMessage(message, type) {
  const messageContainer = document.getElementById('message');
  messageContainer.textContent = message;
  messageContainer.className = `message ${type}`;
  messageContainer.style.display = 'block';

  setTimeout(() => {
    messageContainer.style.display = 'none';
  }, 3000);
}

// Event listener for search button
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      searchProducts();
    }
  });
  
  // Event listeners for category links
  document.getElementById('allProducts').addEventListener('click', () => displayProducts());
  document.getElementById('electronics').addEventListener('click', () => displayProducts('electronics'));
  document.getElementById('menClothing').addEventListener('click', () => displayProducts('men-clothing'));
  document.getElementById('womenClothing').addEventListener('click', () => displayProducts('women-clothing'));
  document.getElementById('kidsClothing').addEventListener('click', () => displayProducts('kids-clothing'));
  document.getElementById('cosmetics').addEventListener('click', () => displayProducts('cosmetics'));
  
  // Function to search products
  function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchInput) || product.category.toLowerCase().includes(searchInput)
    );
  
    if (filteredProducts.length > 0) {
      displayProducts('', searchInput); // Display all products with search input
    } else {
      displayPopupErrorMessage('No products found');
    }
  }
  
 

  // Function to display products based on category and search input
  function displayProducts(category = '', searchInput = '') {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
  
    let filteredProducts = products;
  
    // Filter products based on category
    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
  
    // Filter products based on search input
    if (searchInput) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchInput) || product.category.toLowerCase().includes(searchInput)
      );
    }
  
    if (filteredProducts.length === 0) {
        displayErrorMessage('No products found');
      return;
    }
  
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
  
        <div class="button-container">
          <button onclick="addToCart(${product.id})"><span class="icon">🛒</span>Add to Cart</button>
          <button onclick="addToWishlist(${product.id})"><span class="icon">❤️</span>Add to Wishlist</button>
        </div>
      `;
      productsContainer.appendChild(productCard);
    });
  

  }
  // Function to display error message as a popup
function displayPopupErrorMessage(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
  
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  
// Initial display of products
displayProducts();

function signInWithGoogle() {
    // Placeholder function for Google sign-in
    console.log('Signing in with Google...');
    // Implement Google Sign-In logic or redirect to authentication page
  }
  
  function signInWithEmail() {
    // Placeholder function for email sign-in
    console.log('Signing in with Email...');
    // Implement email sign-in logic or redirect to authentication page
  }
  
  function signInWithPhone() {
    // Placeholder function for phone number sign-in
    console.log('Signing in with Phone Number...');
    // Implement phone number sign-in logic or redirect to authentication page
  }
 