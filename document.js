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

//Use shortcot

const taskTitle = document.getElementById('task-title');
//Now call methods on the taskTitle variable

//Query Selector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
console.log(document.querySelector('#task-title'));

document.querySelector('li').style.color = 'red';  //Notice it just grabs the first item in the list
document.querySelector('li:last-child').style.color = 'red'; 
document.querySelector('li:nth-child(3)').style.color = 'green';





