// ============================================================
// cart.js — Shopping Cart
// ============================================================
// Use localStorage to persist the cart between page loads.
// The cart should be an array of objects stored under one key.
// Each item: { id, name, price, qty }
// ============================================================


// --- Get the current cart from localStorage ---
// Parse the JSON string back into an array.
// Return an empty array if nothing is stored yet.


// --- Save the cart to localStorage ---
// Convert the array to a JSON string before storing.
// Call a function to update the cart item count in the navbar.


// --- Add an item to the cart ---
// If the item already exists (match by id), increase its qty.
// Otherwise push a new item object into the array.
// Save the updated cart.


// --- Remove an item from the cart ---
// Filter out the item with the matching id.
// Save the updated cart.


// --- Update the quantity of an item ---
// Find the item by id and set its qty to the new value.
// If qty drops to 0, remove the item instead.
// Save the updated cart.


// --- Calculate the cart total ---
// Loop through all items and sum (price * qty).
// Return the total as a number.


// --- Get the total number of items in the cart ---
// Sum the qty of every item.
// Used to display the badge count on the cart icon.


// --- Update the cart badge in the navbar ---
// Read the total item count.
// Find the badge element and update its text content.
// Hide the badge when the count is 0.
