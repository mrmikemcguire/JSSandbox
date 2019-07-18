// function declarations

function greet()
    {
    //console.log('Hello');
    return 'Hello';
    }
    //greet();
console.log(greet());


function greet2(firstName, lastName)
    {
    return 'Hello ' + firstName + ' ' + lastName;
    }
console.log(greet2('Fred', 'Flintstone'));


function greet3(firstName = 'Barney', lastName = 'Rubble')
    {
    return 'Hello ' + firstName + ' ' + lastName;
    }
console.log(greet3());

//function expressions

const square = function(x)
    {
    return x * x;
    };  
console.log(square(8));//Notice the semicalon

//mImmeiate/y invokable function expressions - an f(x) you
//invoke and declare at the same time
(function()
    {
    console.log('Notice the parentheses at the end.');
    })();

(function(name)
    {
    console.log('Hello, ' + name + '!');
    })('Mike');

//Property method (Wen an f(x) is put inside an object, it's called a method

const todo = {
    add: function()
        {
        console.log('Add to-do...');
        },
    edit: function(id)
        {
        console.log(`Edit to-do ${id}`);
        }
    };
todo.add();
todo.edit(22);
