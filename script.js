window.addEventListener('scroll', function() {
  // Check if the user has reached the bottom of the page
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    // Load more content
    addListItems();
  }
});

// Function to add items to the list
function addListItems() {
  const list = document.getElementById('infi-list'); // Updated ID based on your HTML structure
  for (let i = 1; i <= 2; i++) { // Add 2 new items each time
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`; // Use backticks for template strings
    list.appendChild(newItem);
  }
}

// Initialize the list with some items
document.addEventListener('DOMContentLoaded', () => {
  addListItems(); // Add initial items
});
