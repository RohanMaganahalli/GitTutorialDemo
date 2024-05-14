document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const userList = document.getElementById('userList');
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault(); // Prevent form submission
      const userDetails = {
        username: document.querySelector('#username').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
      };
      addUserToList(userDetails); // Add user to the list
      storeUserDetails(userDetails); // Store user details in local storage
      form.reset(); // Reset the form after submission
    }
  
    // Function to add user to the list
    function addUserToList(userDetails) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>Username: ${userDetails.username}</span>
        <span>Email: ${userDetails.email}</span>
        <span>Phone: ${userDetails.phone}</span>`;
      userList.appendChild(listItem);
    }
  
    // Function to store user details in local storage
    function storeUserDetails(userDetails) {
      let users = JSON.parse(localStorage.getItem('UserDetails')) || [];
      users.push(userDetails);
      localStorage.setItem('UserDetails', JSON.stringify(users));
    }
  
    // Attach event listener to the form
    form.addEventListener('submit', handleFormSubmit);
  });
  