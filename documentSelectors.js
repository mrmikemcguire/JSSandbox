//Single-element selectors

console.log(document.getElementById('task-title'));

console.log(document.getElementById('task-title').id);

//Change styling

document.getElementById('task-title').style.background = '#888';
document.getElementById('task-title').style.color = '#fff';
//document.getElementById('task-title').style.display = 'none';

//Change content

document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style = "color:red">Task List</span>';

//Use shortcut

const taskTitle = document.getElementById('task-title');
//Now call methods on the taskTitle variable

//Query Selector

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
// console.log(document.querySelector('#task-title'));

// document.querySelector('li').style.color = 'red';  //Notice it just grabs the first item in the list
// document.querySelector('li:last-child').style.color = 'red'; 
// document.querySelector('li:nth-child(3)').style.color = 'green';

//Multiple selectors

const items = document.getElementsByClassName('collection-item');  //Notice the plural
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';

let lis = document.getElementsByTagName('li');  //Notice the plural
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';

lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li) {
    li.textContent = 'Hello';
});

console.log(lis);

// document.querySelectorAll

const items2 = document.querySelectorAll('collection-item');  //Notice the plural






