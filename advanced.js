/*eslint-env browser*/
// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    */

//    this.calculateAge = function() {              // Uncomment this and comment prototype to see the difference with adding in constructor vs prototype
//        console.log(2016 - this.yearOfBirth);
//    };
//};
// ----------------------------------------------------------------------
// Adding a method that user wants to it to be inherited is better
// than adding it directly in the constructor is because
// adding it in constructor uses memory to store it
// in the new instance, whereas adding it in the
// prototype does not include as a property of the instance
// rather, the instance can access the method from the prototype
// This approach saves time and is more efficient
/*
Person.prototype.calculateAge = function () {   // Method to be inherited
        console.log(2016 - this.yearOfBirth);
    };

Person.prototype.lastName = 'Smith';            // Property to be inherited

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/
// ----------------------------------------------------------------------
// To see the difference in adding in constructor/prototype
// Uncomment/Comment the corresponding method in either constructor/prototype
// And console.log each of it

//console.log(john);

// The JavaScript console in our browsers 
// is a very powerful tool to insepct
// objects and the prototype chain


// .hasOwnProperty('job') to check if an object has a certain property
// instanceof Person check if an object is an instance of another Object
// ----------------------------------------------------------------------

// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});




































