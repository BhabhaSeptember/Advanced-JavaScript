"use strict";

//******************************CLASSES & OBJECTS****************************/

// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//    };
// let dog = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog);

//*******CONVERTING ABOVE FUNCTION TO CLASS
// class Dog {
//     constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//     };
//    };
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog);
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

//********************************CLASSES***********************************/

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// };

// let p = new Person("Bhabha", "September");
// alert(`Welcome back, ${firstName} ${lastName}`);

//*************PRACTICE EXERCISE 7.1**********/

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// };

// let friend = new Person("Karabo", "Zulu");
// let friend2 = new Person("Nonsi", "Mbense");

// console.log(`Hey ${friend.firstName} ${friend.lastName} and ${friend2.firstName} ${friend2.lastName}!!`);

//********************************METHODS***********************************/

// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//     greet() {
//     console.log("Hi there! I'm", this.firstname);
//     }
//     compliment(name, object) {
//         return `That's a wonderful ${object}, ${this.firstname}`;
//     }
//    }

//    let p = new Person("Bhabha", "September");
//    p.greet();
//    let compliment = p.compliment(p.firstname, "hat");
//    console.log(compliment);

//*************PRACTICE EXERCISE 7.1**********/

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     fullName() {
//         console.log(`Full name: ${this.firstName} ${this.lastName}`);
//     }
// };

// let person = new Person("Karabo", "Zulu");
// let person2 = new Person("Nonsi", "Mbense");

// person.fullName();
// person2.fullName();

//*********************************PROPERTIES***********************************/

// class Person {
//     //hash # symbolizes private fields/properties
//     #firstName;
//     #lastName;
//     constructor(firstName, lastName) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }
// //*****GETTER & SETTER METHODS*****/
//     get firstName() {
//         return this.#firstName;
//     }

//     set firstName(firstName) {
//         this.#firstName = firstName
//     }

//     get lastName() {
//         return this.#lastName;
//     }

//     set lastName(lastName) {
//         this.#lastName = lastName
//     }
// };

// let p = new Person("Tracy", "September");
// console.log(p.firstName); //results in undefined because it's inaccessible. requires getter & setter methods

//********************************INHERITANCE***********************************/

// //*******Super/parent class
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log(`Moving at ${this.currentSpeed}`);
//     }

//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// //*******Sub-class
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!!");
//     }
// }

// let motorcycle = new Motorcycle("Silver", 0, 250, "gasoline");
// console.log(motorcycle.color);

// motorcycle.accelerate(50);
// motorcycle.move();

//********************************PROTOTYPES***********************************/

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there!");
//   }
// }

// //Creating function/method outside of the class using the prototype keyword
// Person.prototype.introduce = function () {
//   console.log("Hi, I'm", this.firstname);
// };

// Person.prototype.favoriteColor = this.favoriteColor;
// Person.prototype.favoriteColor = "aqua";

// let me = new Person("Bhabha", "September");
// me.introduce();
// console.log(me.favoriteColor);


//*************PRACTICE EXERCISE 7.2**********/

class Animal {
    constructor(theName, type, color, sound) {
        this.theName = theName;
        this.type = type;
        this.color = color;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.theName} the ${this.type} says ${this.sound}`);
    }
};

let animal = new Animal("Buffels", "Chihuahua", "Brown", "Roof roof");
let animal2 = new Animal("Danger", "Parrot", "Green", "Mi mi mi ka ka ka");
console.log("Animal1: ", animal);
console.log("Animal2: ", animal2);


Animal.prototype.walk = function () {
    console.log(`${this.theName} walks on ${this.legs} legs.`);
};
console.log("\n\nSpeak function: ");
animal.speak();
animal2.speak();


Animal.prototype.legs = this.legs;
animal.legs = 4;
animal2.legs = 2;
console.log("\n\nWalk function: ");
animal.walk();
animal2.walk();

console.log("\n\nFinal Animal Object: ");
console.log("Animal1: ", animal);
console.log("Animaml2:", animal2);


