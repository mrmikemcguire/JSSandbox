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

document.querySelectorAll('li:nth-child(odd)').style.color = 'red';














