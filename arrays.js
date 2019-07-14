const numbers = [43, 56, 21, 9, 78];
const numbers2 = new Array(43, 56, 21, 9, 78);
const mixed = [34, 'Mike', true, null, undefined, {a:1, b:1}];

console.log(mixed);

let val;

val = numbers.length;
val = Array.isArray(numbers);
val = numbers[2];
numbers[2] = 100;  // replaces
val = numbers.indexOf(9);

//mutating arrays
numbers.push(250);  //adds to end
numbers.unshift(120);   //adds to beginning
numbers.pop();  //removes last value
numbers.shift();    //removes first value
numbers.splice(1,1);    //removes specific values
numbers.reverse();

//concatenating arrays
val = numbers.concat(numbers2);

//sorting
val = numbers.sort();   //only looks at first digit of numbers!!!
val = numbers.sort(function(a, b){
    return a - b;
});

//find
function under50(num){
    return num < 50;
};
val = numbers.find(under50);

console.log(val);