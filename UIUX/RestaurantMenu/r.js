// Sample menu data
const menu = [
  { 
    category: 'Breakfast', 
    criteria: 'Served until 11:00 AM', 
    items: [
      { name: 'Egg and Bacon Sandwich', cost: 7.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\bacon.jpg', deliveryTime: '15-20 minutes' },
      { name: 'Pancakes with Maple Syrup', cost: 9.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\maple.jpg', deliveryTime: '12-18 minutes' },
      { name: 'French Toast', cost: 8.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\toast.jpg', deliveryTime: '12-18 minutes' },
      { name: 'Omelette', cost: 10.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\omlette.jpg', deliveryTime: '15-20 minutes' },
      { name: 'Bagel with Cream Cheese', cost: 6.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\bagel.jpg', deliveryTime: '10-15 minutes' },
    ]
  },
  { 
    category: 'Lunch', 
    criteria: 'Served from 11:00 AM to 3:00 PM', 
    items: [
      { name: 'Classic Burger with Fries', cost: 12.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\burger.jpg', deliveryTime: '20-25 minutes' },
      { name: 'Caesar Salad with Grilled Chicken', cost: 10.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\salad.jpg', deliveryTime: '15-20 minutes' },
      { name: 'Vegetable Wrap', cost: 9.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\wrap.jpg', deliveryTime: '12-18 minutes' },
      { name: 'Beef Tacos', cost: 11.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\tacos.jpg', deliveryTime: '18-22 minutes' },
      { name: 'Chicken Quesadilla', cost: 11.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\chicken.jpg', deliveryTime: '18-22 minutes' },
    ]
  },
  { 
    category: 'Dinner', 
    criteria: 'Served from 5:00 PM to 10:00 PM', 
    items: [
      { name: 'Grilled Salmon with Asparagus', cost: 18.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\salmon.jpg', deliveryTime: '25-30 minutes' },
      { name: 'Margherita Pizza', cost: 14.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\margherita.jpg', deliveryTime: '20-25 minutes' },
      { name: 'Pasta Primavera', cost: 13.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\primavera.jpg', deliveryTime: '18-22 minutes' },
      { name: 'Chicken Alfredo', cost: 16.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\alfredo.jpg', deliveryTime: '20-25 minutes' },
      { name: 'Beef Stir Fry', cost: 15.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\beef.jpg', deliveryTime: '22-27 minutes' },
    ]
  },
  { 
    category: 'Beverages', 
    criteria: 'Available all day', 
    items: [
      { name: 'Iced Coffee', cost: 3.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\cooffee.jpg', deliveryTime: '5-10 minutes' },
      { name: 'Lemonade', cost: 2.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\lemonade.jpg', deliveryTime: '5-10 minutes' },
      { name: 'Orange Juice', cost: 2.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\orange.jpg', deliveryTime: '5-10 minutes' },
      { name: 'Mango Smoothie', cost: 4.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\mango.jpg', deliveryTime: '5-10 minutes' },
      { name: 'Virgin Mojito', cost: 1.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\virginmojito.jpg', deliveryTime: '5-10 minutes' },
    ]
  },
  { 
    category: 'Desserts', 
    criteria: 'Available all day', 
    items: [
      { name: 'Chocolate Cake', cost: 6.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\chocolatecake.jpg', deliveryTime: '8-12 minutes' },
      { name: 'Cheesecake', cost: 7.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\cheesecake.jpg', deliveryTime: '8-12 minutes' },
      { name: 'Apple Pie', cost: 5.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\applepie.jpg', deliveryTime: '8-12 minutes' },
      { name: 'Ice Cream Sundae', cost: 4.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\icecream.jpg', deliveryTime: '8-12 minutes' },
      { name: 'Fruit Tart', cost: 6.99, image: 'C:\\Users\\Sakshi\\OneDrive\\Desktop\\UIUX\\RestaurantMenu\\images\\fruit-custard.jpg', deliveryTime: '8-12 minutes' },
    ]
  },
  // Add more categories with items
];

// Function to display categories
function displayCategories() {
  const categoriesContainer = document.getElementById('categories-container');
  menu.forEach(categoryData => {
    const categoryButton = document.createElement('button');
    categoryButton.classList.add('category');
    categoryButton.textContent = categoryData.category;
    categoryButton.onclick = () => displayItems(categoryData);
    categoriesContainer.appendChild(categoryButton);
  });
}

// Function to display items
function displayItems(categoryData) {
  const itemsContainer = document.getElementById('items-container');
  itemsContainer.innerHTML = '';
  categoryData.items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>Cost: $${item.cost.toFixed(2)}</p>
        <p>Delivery Time: ${item.deliveryTime}</p>
        <button onclick="addToCart('${item.name}', ${item.cost})">Add to Cart</button>
        <button onclick="addToWishlist('${item.name}', ${item.cost})">Add to Wishlist</button>
        <span class="wishlist-icon red-x" onclick="addToWishlist('${item.name}', ${item.cost})">&#x2665;</span>
        <span class="cart-icon" onclick="addToCart('${item.name}', ${item.cost})">&#128722;</span>
        <span class="wishlist-message" id="wishlist-${item.name}"></span>
        <span class="cart-message" id="cart-${item.name}"></span>
      </div>
    `;
    itemsContainer.appendChild(itemDiv);
  });
}

// Function to add item to wishlist
function addToWishlist(itemName) {
  const wishlistMessage = document.getElementById(`wishlist-${itemName}`);
  wishlistMessage.textContent = `Added ${itemName} to wishlist `;
  const wishlistIcon = document.createElement('span');
  wishlistIcon.classList.add('wishlist-icon');
  wishlistIcon.classList.add('red-x');
  wishlistIcon.innerHTML = '&#x2665;';
  wishlistMessage.appendChild(wishlistIcon);
}

// Function to add item to cart
function addToCart(itemName) {
  const cartMessage = document.getElementById(`cart-${itemName}`);
  cartMessage.textContent = `Added ${itemName} to cart `;
  const cartIcon = document.createElement('span');
  cartIcon.classList.add('cart-icon');
  cartIcon.innerHTML = '&#128722;';
  cartMessage.appendChild(cartIcon);
}


// Initial display of categories
displayCategories();
