//add event listener
document.querySelector('.clear-tasks').addEventListener('click', 
    function() {
        console.log('Hello World');
    });

//using a named function instead of an anonymous function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) 
//     { 
//     console.log('Clicked'); 
//     };
  
//check out info inside MouseEvent!
//clientx and clienty show where clicked relative to window
//shiftkey can be useful
//target is critical to check in debugging
function onClick(e) 
    { 
    let val;
    val = e;
    console.log(val);
    val = e.target;
    val = e.target.className;
    console.log(val);
    }

//check out other MouseEvent event types

    
 