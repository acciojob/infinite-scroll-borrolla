//your code here!
document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('myList');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      addListItems();
    }
  });

  observer.observe(list.lastElementChild);

  function addListItems() {
    for (let i = 1; i <= 2; i++) {
      const newItem = document.createElement('li');
      newItem.textContent = `New Item ${list.children.length + 1}`;
      list.appendChild(newItem);
      observer.observe(newItem);
    }
  }
});
