const person = {
    firstName: 'Mike',
    lastName: 'McGuire',
    age: 59,
    email: 'mcguire@mullenhigh.com',
    hobbies: ['coding', 'reading', 'yoga', 'cycling'],
    address: {
        city: 'Littleton',
        state: 'Colorado'
        },
    getBirthYear: function() {
        return 1960;
        }
}

let val;

val = person.hobbies;
val = person.getBirthYear();
//val = person['firstName'];

console.log(val);