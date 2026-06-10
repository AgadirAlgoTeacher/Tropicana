// ============================================================
// products.js — Product Fetching & Rendering
// ============================================================
// Loads product data from data/products.json and builds
// the HTML needed to display products on the page.
// ============================================================


// --- Fetch all products ---
// Use fetch() to load data/products.json.
// Return the parsed array of product objects.


// --- Render a single product card ---
// Accept a product object as a parameter.
// Return an HTML string for one product card.
// Card should show: image, name, price, category, and an "Add to Cart" button.


// --- Render a list of products into a container ---
// Accept an array of products and a container element.
// Clear the container, then insert a card for each product.
// Show a "No products found" message if the array is empty.


// --- Filter products ---
// Accept the full products array and a filters object (category, maxPrice, etc.).
// Return a new array containing only the matching products.


// --- Sort products ---
// Accept the products array and a sort option string (e.g. "price-asc", "price-desc", "name").
// Return a new sorted array without modifying the original.


// --- Handle "Add to Cart" button clicks ---
// Find the product by id from the fetched data.
// Call the addToCart() function from cart.js.
// Give the user feedback (e.g. change button text briefly).
