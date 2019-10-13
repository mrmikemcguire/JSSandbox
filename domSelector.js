// single element selectors
//document.getElementById()

console.log(document.getElementById('task-title'));

// get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';

// change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style = "color:red">Task List</span>';

// a better way to do this - assign as a variable to simplfy
const taskTitle = document.getElementById('task-title');
console.log(taskTitle.id);

// document.querySelector() - a better way

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));

// target a specific element if it's one of many

// document.querySelector('li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'green';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';

//multiple element selectors

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
items[0].style.color = 'red';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

let lis = document.getElementsByTagName('li');
console.log(lis);

// convert HTML collection to an array

lis = Array.from(lis);
lis.reverse();
console.log(lis);

lis.forEach(function(li) {
    console.log(lis.className)
});

// querySelectorAll - returns node list instead of HTML collection
// This eliminates the need to convert to an array

const items2 = document.querySelectorAll('ul.collection li.collection-item');

console.log(items2);

items2.forEach(function(item2) {
    console.log(items2.className)
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++)
    {
    liEven[i].style.background = '#f4f4f4';
    }

console.log(items2);















