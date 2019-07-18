// For loop

for(let i = 0; i < 10; i++)
    {
    console.log(i);
    }

for(let i = 0; i < 10; i++)
    {
    if (i === 6)
        {
        console.log('6 is my favorite number');
        continue;
        }
    console.log(i);
    }

for(let i = 0; i < 10; i++)
    {
    if (i === 7)
        {
        console.log('Stop the loop');
        break;
        }
    console.log(i);
    }

//While loop

let i = 0;
while(i < 10)
    {
    console.log(i);
    i++;
    }

//Do while loop

let j = 100;

do
    {
    console.log(j);
    j++;
    }
while (j < 10);

const bedrock = ['Fred', 'Wilma', 'Betty', 'Barney'];

for(let i = 0; i < bedrock.length; i++)
    {
    console.log(bedrock[i]);
    }

bedrock.forEach(function(current)
    {
    console.log(current);
    });

bedrock.forEach(function(name, index)
    {
    console.log(`${index} : ${name}`);
    });

//Map
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Lisa'},
    {id: 3, name: 'Naomi'},
    {id: 4, name: 'Steve'}
    ];

const ids = users.map(function(current)
    {
    return current.id;
    });

console.log(ids);

//For i loop

const user = {
    firstName: 'Bugs',
    lastName: 'Bunny',
    age: 79
    }

for(let x in user)
    {
    console.log(x);
    console.log(`${x} : ${user[x]}`);
    }

