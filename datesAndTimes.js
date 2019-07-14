let val;

const today = new Date();
let birthday = new Date('3/11/1960');
let birthday2 = new Date('March 11 1960');


val = today;
//Good project: Convert to String and manipulate data

val = today.getMonth();  //notice that the months are one off because January is 0
val = today.getDay();  //Sundays start with 0
val = today.getFullYear();
val = today.getHours();
val = today.getSeconds();
val = today.getTime();  //number of milliseconds passed since 1/1/1970

birthday.setMonth(3);
birthday.setFullYear(1970);

console.log(birthday);
console.log(typeof val);
//console.log(birthday);
