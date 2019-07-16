const id = '100';

if(id == 100) 
    {
    console.log('Yep, it is 100.');
    }
else
    {
    console.log('No, that is not 100.');
    }

    // Use === to confirm equal to value AND type - this should be your default
    // There is also != and !==

    if(id)  //Notice that this doesn't have to evaluate as true in JS
    //Better would be if(typeof id !== 'undefined')
        {
        console.log(`The ID is ${id}`);
        }
    else
        {
        console.log('No ID');
        }

    // You can add more conditions with 'else if'

    // Logital operators function the same as in Java

    //Ternary Operator
    console.log(id == 100 ? 'Correct'  : 'Incorrect');