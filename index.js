// Select the list items
var listItems = document.querySelectorAll('.fruits li');

// Make the 3rd element in the list have yellow background color
listItems[2].style.backgroundColor = 'yellow';

// Make all the elements in the list have bold font
listItems.forEach(function(item) {
  item.style.fontWeight = 'bold';
});
