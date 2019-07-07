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

/*
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

*/

// ----------------------------------------------------------------------

// Primitives vs Objects

// Variables containing primitives hold data inside the variable itself
// Variable associated with object does not hold the object inside, but a reference to the memory location (Pointers)

/*
var a = 23;
var b = a;
a = 46;

// You'll notice that value of b is not affected after mutation of a. Because primitive variables hold their
// own data within
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

// Notice that the value of both obj's age is the same, because the variable store a reference to the memory location
// instead of storing the value in of itself
console.log(obj1.age);
console.log(obj2.age);

// Now lets do functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, obj) {
    a = 30;
    obj.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

// ----------------------------------------------------------------------

// Passing functions as arguments

//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var output = [];
//    
//    for(var i=0;i<arr.length;i++) {
//        output.push(fn(arr[i]));
//    }
//    
//    return output;
//}
//
//// This is a callback function
//function calculateAge(el) {
//    return 2016-el;
//}
//
//function checkFullAge(age) {
//    return age >= 18;
//}
//
//function maxHeartRate(el) {
//    return el >= 18 && el <=81 ?Math.round(206.9 - (0.67 * el)):
//                                -1;
//}
//
//// Don't need parenthesis for calculateAge here because
//// it will be called immediately, but we want it
//// to be called when needed in the function arrayCalc
//var ages = arrayCalc(years, calculateAge);
//console.log(ages);
//
//var fullAges = arrayCalc(ages, checkFullAge);
//console.log(fullAges);
//
//var heartRates = arrayCalc(ages, maxHeartRate);
//console.log(heartRates);

// First class functions: returning functions

//function interviewQuestion(job) {
//    if (job === 'designer') {
//        return function(name) {
//            console.log(name + ', can you please explain what UX design is ?');
//        };
//    } else if (job === 'teacher') {
//        return function (name) {
//            console.log('What subject do you taech, ' + name + '?');  
//        };
//    } else {
//        return function (name) {
//            console.log('Hello ' + name + ', what do you do?');
//        };
//    }
//}
//
//var teacherQuestion = interviewQuestion('teacher');
//teacherQuestion('John');
//
//var designerQuestion = interviewQuestion('designer');
//designerQuestion('John');

// Function Immediately invoked function expression

//function game() {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//}
//game();

//(function () {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//})();

// Closures

//function retirement(retirementAge) {
//    var a = ' years left until retirement';
//    return function (yearOfirth) {
//        var age = 2016 - yearOfirth;
//        console.log((retirementAge - age) + a);
//    }
//}
//
//
//var retirementUS = retirement(66);
//
//retirementUS(1990);
//retirement(66)(1990);  
//
//var retirementGermany = retirement(65);
//var retirementIceland = retirement(67);
//
//retirementGermany(1990);
//retirementIceland(1990);

//function interviewQuestion(job) {
//    if (job === 'designer') {
//        return function(name) {
//            console.log(name + ', can you please explain what UX design is ?');
//        };
//    } else if (job === 'teacher') {
//        return function (name) {
//            console.log('What subject do you taech, ' + name + '?');  
//        };
//    } else {
//        return function (name) {
//            console.log('Hello ' + name + ', what do you do?');
//        };
//    }
//}

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is ?');
        } else if (job === 'teacher') {
                console.log('What subject do you taech, ' + name + '?');  
        } else {
                console.log('Hello ' + name + ', what do you do?');
        }
    }
}


interviewQuestion('John')('designer');










































