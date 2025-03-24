//your code here!
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('inf-list');
  // Function to add list items
  function addListItems() {
    for (let i = 1; i <= 12; i++) {
      const newItem = document.createElement('li');
      newItem.textContent = `Item ${list.children.length + 1}`;
      list.appendChild(newItem);
    }
  }
  // Initial list items
  addListItems();

  // Setting up intersection observer for infinite scrolling
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      addListItems();
    }
  });

  // Observe the last item in the list
  observer.observe(list.lastElementChild);
});






