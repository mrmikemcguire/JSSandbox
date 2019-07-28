let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


//These are nodes
val = listItem;
val = list;

//Get child nodes of ul

val = list.childNodes;  //Notice this includes 'text', which is each line break
val = list.children;
val = list.children[0];
val = list.children[2].children;
val = list.firstChild;
val = list.firstElementChild;
val = list.lastElementChild;
val = list.childElementCount;

//Parents

val = listItem.parentNodes;  //Notice this includes 'text', which is each line break
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling;  //null because there's nothing previous




console.log(val);
