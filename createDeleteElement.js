// create element
const li = document.createElement('li');

//add class
li.className = 'collection-item';

//add id
li.id = 'example-item';

//add attribute
li.setAttribute('title', 'New Item');

//create text node & append
li.appendChild(document.createTextNode('Hello World'));

//replace element - first make new one
const newHeading = documentCreateElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));
//then get the old heading
const oldHeading = document.getElementById('task-title');
const cardAction = document.querySelector('.cardAction');
cardAction.replaceChild(newHeading, oldHeading);

//remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
lis[0].remove();