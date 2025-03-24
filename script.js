document.addEventListener('DOMContentLoaded', () => {
const list = document.getElementById('infi-list');

// Function to add items to the list
function addListItems() {
  for (let i = 1; i <= 2; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
  }
}

// Add scroll event to the list
list.addEventListener('scroll', function() {
  if (this.offsetHeight + this.scrollTop >= this.scrollHeight) {
    addListItems();
  }
});

// Initialize the list with some items
document.addEventListener('DOMContentLoaded', function() {
  addListItems();
});

	