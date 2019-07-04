let val;

// number to string
val = 5;

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(5);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = (5).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

// boolean to string

val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true.toString());

console.log(val);
console.log(typeof val);
console.log(val.length);

// date to string

val = String(new Date());

console.log(val);
console.log(typeof val);
console.log(val.length);

// array to string

val = String ([1, 2, 3, 4]);

console.log(val);
console.log(typeof val);
console.log(val.length);

// string to number

val = '123';

console.log(val);
console.log(typeof val);
console.log(val.length);
//console.log(val.toFixed(2));

val = Number('123');

console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

// boolean to number

val = Number(true);

console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

val = Number(false);

console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

val = parseInt('100');

console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

val = parseFloat('100.99');

console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

// type coercion

const val1 = 5;
//const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);








