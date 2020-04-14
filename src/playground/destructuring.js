// OBJECT DESTRUCTURING
/*
const person = {
    name: Anjali,
    age: 18,
    location: {
        city: 'Rivonia',
        temp: 21
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const {temp: temperature, city} = person.location;
if (city && temperature) {
    console.log(`Its ${temperature} in ${city} `)


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
       // name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
}
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// ARRAY DESTRUCTURING

const address = ['1299 S Junior Street', 'Philadelphia', 'Pennysylvaina','19147'];
const [, city, state = 'New '] = address;
console.log(`You are in ${city} ${state}.`);*/
//----------------------------------------------------------------------------
const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);


