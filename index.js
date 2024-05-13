document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fruits = document.querySelector('.fruits');
    const filter = document.getElementById("filter"); // Get the filter element
  
    // Function to handle adding a new fruit
    function addFruit(fruitName,fruitDescription) {
      const newLi = document.createElement('li');
      newLi.innerHTML = `
      <span>${fruitName}</span>
      <p><em>${fruitDescription}</em></p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">x</button>`;
      fruits.appendChild(newLi);
    }
  
    // Event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const fruitToAdd = document.getElementById('fruit-to-add').value.trim();
      const fruitDescription = document.getElementById('description').value.trim();

      if (fruitToAdd !== '') {
        addFruit(fruitToAdd, fruitDescription);
        document.getElementById('fruit-to-add').value = ''; // Clear the input field
        document.getElementById('description').value = '';
      }
    });
  
    // Function to filter fruits based on entered text
    function filterFruits(textEntered) {
      const fruitItems = fruits.querySelectorAll('li'); // More specific selector
      for (let i = 0; i < fruitItems.length; i++) {
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
        if (currentFruitText.indexOf(textEntered) === -1) {
          fruitItems[i].style.display = "none";
        } else {
          fruitItems[i].style.display = "flex";
        }
      }
    }
  
    // Attach event listener to the filter input
    filter.addEventListener("keyup", function(event) {
      const textEntered = event.target.value.toLowerCase();
      filterFruits(textEntered);
    });
  
    // Attach event listeners to delete buttons
    fruits.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
      }
    });
  
    // Attach event listeners to edit buttons for existing fruits
    // Add edit buttons to existing fruits
    const existingFruits = document.querySelectorAll('.fruit');
    existingFruits.forEach(function(fruit) {
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-btn');
      fruit.appendChild(editButton);
    });
  
    // Attach event listeners to edit buttons for existing fruits
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        const fruitItem = button.parentElement; // Get the parent fruit element (li)
        const fruitSpan = fruitItem.querySelector('span'); // Get the span containing the fruit name
        const descriptionSpan = fruitItem.querySelector('p i'); // Get the span containing the description (assuming structure)
        
        // Change UI to editing mode (optional)
        fruitItem.classList.add('editing'); // Add a CSS class for visual indication
  
        // Option 1: Replace span content with an input field (uncomment to use)
        // fruitSpan.textContent = ''; // Remove current text
        // const inputField = document.createElement('input');
        // inputField.value = fruitSpan.textContent; // Set initial value
        // fruitItem.appendChild(inputField);
        // inputField.focus(); // Set focus to the input field
        
        // Option 2: Allow inline editing within the span (uncomment to use)
        fruitSpan.contentEditable = true; // Make the span editable
        fruitSpan.focus(); // Set focus to the span for immediate editing
        descriptionSpan.contentEditable = true; // Make the span editable
        // Implement logic to save the edited name (after editing is done)
        fruitSpan.addEventListener('blur', function() { // Trigger on losing focus
          const newFruitName = fruitSpan.textContent.trim();
          if (newFruitName !== '') { // Validation (optional)
            fruitSpan.contentEditable = false; // Disable editing
            fruitItem.classList.remove('editing'); // Remove editing mode class
            fruitSpan.textContent = newFruitName; // Update fruit name
          } else {
            // Handle case where user enters no name (optional)
            alert('Please enter a valid fruit name.');
          }
        });
      });
    });
  });
  

