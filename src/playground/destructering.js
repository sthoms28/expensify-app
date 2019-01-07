const person = {
    //name: 'Shaner',
    age: 43,
    location: {
        city: 'Orlando',
        temp: 85
    }

};
const {name: firstName = 'Anonymous', age} = person;

// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);



// if(person.location.city && person.location.temp){

// console.log(`It's ${person.location.temp} in ${person.location.city}. `);
// }

const {city, temp:temperature} = person.location;
if(city && temperature){

console.log(`It's ${temperature} in ${city}. `);
}

// const book = {
//     title: 'Dousche is the way of the walk',
//     author: 'Nutsack',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin , Self-Published

//Array Destructuring

const address = ['2575 Athens Dr', 'Leesburg', 'Florida', '34748'];

const [, town, state = 'Ill and Annoyed'] = address;


console.log(`You are in ${town} ${state}.`);

const item = ['Coffee (iced)', '2.00', '2.55', '2.75'];
const [coffee, ,medium] = item;

console.log(`A medium ${coffee} costs ${medium}.`);