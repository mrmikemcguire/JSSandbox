const name = 'Fred';
const age = 40;
const job = 'construction';
const city = 'Bedrock';

//without templace literals
let html;
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

document.body.innerHTML = html;

// with template literals (template strings)

//this is a back tick (left of #1 key)
html = ` 
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`;
document.body.innerHTML = html;
