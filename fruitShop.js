var mainHeading = document.getElementById('main-heading');

mainHeading.textContent = 'Fruit World';
document.getElementById('main-heading').style.color = 'orange';

document.getElementById('header').style.backgroundColor = 'green';

document.getElementById('header').style.borderBottom = '2px solid orange';

document.getElementById('basket-heading').style.color = 'green';

var paragraph = document.createElement('p');

paragraph.textContent = 'Please visit us again';

var thanksDiv = document.getElementById('thanks');

thanksDiv.appendChild(paragraph);

