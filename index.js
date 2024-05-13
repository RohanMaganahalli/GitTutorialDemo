// Select the list items
var listItems = document.querySelectorAll('.fruits li');

// Make the 3rd element in the list have yellow background color
listItems[2].style.backgroundColor = 'yellow';

// Make all the elements in the list have bold font
listItems.forEach(function(item) {
  item.style.fontWeight = 'bold';
});
var fifthListItem = document.querySelectorAll('.fruits li')[4]; // 5th item has index 4
fifthListItem.style.color = 'blue';

var listItems = document.querySelectorAll('.fruits li');
listItems.forEach(function(item) {
  item.style.fontStyle = 'italic';
});
