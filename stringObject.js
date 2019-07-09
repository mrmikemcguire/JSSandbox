const firstName = 'Fred';
const lastName = 'Flintstone';
let val;
let str;

val = firstName + ' ' + lastName;
val = firstName.concat(' ', lastName);
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName.indexOf('e');
val = lastName.charAt(3);
val = lastName.charAt(lastName.length - 1);
val = lastName.substring(5);
val = lastName.substring(5, 10);
val = lastName.slice(0, 4);
val = lastName.slice(-5);

str = "dog cat moose rat bird";
str = str.replace('moose', 'mouse');
val = str.split(' ');
val = val.includes('mouse');




// val = "That's awesome, isn't it?";
// val = 'That\'s awesome, isn\'t it?';

// val

console.log(val); 

