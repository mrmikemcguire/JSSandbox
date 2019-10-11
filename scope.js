//Global Scope
var a = 1;
let b = 2;
const c = 3;

function test()
    {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
    }
test();

console.log('Global Scope: ', a, b, c);
//Block scope
if(true)
    {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block Scope: ', a, b, c);
    }
    //Notice that var changes in the global scope
    //This is different than most other longuages and can cause security issues

console.log('Global Scope: ', a, b, c);