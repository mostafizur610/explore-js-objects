// create object using object literals 
const player = {};
player.namae = 'Small Nirob';
player.speciality = 'batsman';
player.bat = function () {
    console.log('swing your bat');
}
// console.log(player);
// player.bat();


const student = {
    name: 'Pandy',
    job: 'khay andey',
    ball: function () {
        console.log('throw the ball')
    },
    salary: 100000
}

//  object cconstructor
const person = new Object();
// console.log(person);


// object create method

// const item = Object.create(null);
const atel = Object.create(student);
// console.log(atel.name);
// console.log(atel.friend);

//  class
class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);

// function
function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);