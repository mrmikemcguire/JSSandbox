// Log to console

/*
Use End to move cursor to end of line
in order to insert semi-colon
*/

console.log([1,2,3,4]);
console.log({a:1, b:2, c:3});
console.table({a:1, b:2, c:3});

console.error('This is an error warning');
console.warn('Caution!');
// console.clear();

console.time('Start/Stop');
    console.log('Do something here');
    console.log('Do something here');
    console.log('Do something here');
    console.log('Do something here');
    console.log('Do something here');
    console.log('Do something here');
    console.log('Do something here');
console.timeEnd('Start/Stop');
