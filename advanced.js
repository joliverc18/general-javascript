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

//function interviewQuestion(job) {
//    return function(name) {
//        if (job === 'designer') {
//            console.log(name + ', can you please explain what UX design is ?');
//        } else if (job === 'teacher') {
//                console.log('What subject do you taech, ' + name + '?');  
//        } else {
//                console.log('Hello ' + name + ', what do you do?');
//        }
//    }
//}
//
//
//interviewQuestion('John')('designer');

// Lecture : Bind, Call and apply

//var john = {
//    name: 'John',
//    age: 26,
//    job: 'teacher',
//    presentation: function(style, timeOfDay) {
//        if (style === 'formal') {
//            console.log('Good ' + timeOfDay + ', Ladies and gentleman I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//        } else if (style === 'friendly') {
//            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//        }
//    }
//}
//
//var emily = {
//    name: 'Emily',
//    age: 35,
//    job: 'designer'
//};
//
//john.presentation('formal', 'morning');
//
//// Method borrowing
//// First argument is to set the 'this' element which in this case is emily
//john.presentation.call(emily, 'friendly', 'afternoon');
//
//// This will not work here because our input is not an array input
////john.presentation.apply(emily, ['friendly', 'afternoon']);
//
//// Bind method doesn't immediately call the function
//// but it generates a copy of the function so we can store
//// it elsewhere. Useful for creating functions with present arguments
//
//var johnFriendly = john.presentation.bind(john, 'friendly');
//
//johnFriendly('morning');
//johnFriendly('night');
//
//var emilyFormal = john.presentation.bind(emily, 'formal');
//
//emilyFormal('morning');
//
//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i=0;i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return 2016 - el;
//} 
//
//function isFullAge(limit, el) {
//    return el >= limit;
//}
//
//
//var ages = arrayCalc(years, calculateAge);
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
//console.log(ages);
//console.log(fullJapan);

// Coding Challenge 

/*
    1.  Build a function constructor called Question to describe a question. 
        A question should include:
        a) question itself
        b) the possible answers from which the player can choose
        c) correct answer
        
    2.  Create a couple of questions using the constructor
    
    3.  Store the Task 2 in an array
    
    4.  Select one random question and log it on the console,
        together with the possible answers (each question should
        have a number)
        
    5.  Use the 'prompt' function to ask the user for the correct
        answer. The user should input the number of correct answer
        such as you displayed it on Task 4.
        
    6.  Check if the answer is correct and print to the console
        whether the answer is correct or not
        (Hint: Write another method for this)
        
    7.  Suppose this code would be a plugin for other programmers
        to use in their code. So make sure that all your code
        is private and doesn't interfere with the other programmers code
        (Hint: A special technique)
*/
//(function () {
//    function Question(question, answer, correct) {
//        this.question = question;
//        this.answer = answer;
//        this.correct = correct;
//    }
//
//    Question.prototype.displayQuestion =  function() {
//        console.log(this.question);
//
//        for (var i=0;i<questionArr.length;i++) {
//            console.log(i + ': ' + this.answer[i]);
//        }
//    }
//
//    Question.prototype.checkAnswer = function(input) {
//        if (input === this.correct) {
//            console.log('Correct answer!');
//        } else {
//            console.log('Wrong answer!');
//        }
//    }
//
//    function checkAnswer(input, question) {
//        if (input == question.correct) {
//            console.log('Correct answer!');
//        } else {
//            console.log('Wrong answer!');
//        }
//    }
//
//    var q1 = new Question('Do you like coding?', ['Yes','No'], 0);
//    var q2 = new Question('Is JavaScript fun?', ['Yes','No'], 0);
//
//    var questionArr = [q1, q2];
//    var length = questionArr.length;
//    var rand = Math.floor(Math.random() * length);
//
//    // Display question in console
//    questionArr[rand].displayQuestion();
//
//
//    var input = parseInt(window.prompt('What is your answer?: '));
//    questionArr[rand].checkAnswer(input);
// })();

/* 
    8.  After you display the result, display the next random question,
        so that the game never ends
        (Hint: Write a function for this and call it right after displaying the result)
        
    9.  Be careful: after Task 8, the game literally never ends. So include the option
        to quit the game if the user writes 'exit' instead of the answer.
        In this case, DON'T call the function from task 8.
        
    10. Track the user's score to make the game more fun! So each time an answer is correct, 
        add 1 point to the score.
        (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with
        the tools you feel more comfortable at this point).
        
    11. Display the score in the console.
        Use yet another method for this.
*/

(function () {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.displayQuestion =  function() {
        console.log(this.question);

        for (var i=0;i<questionArr.length;i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }

    Question.prototype.checkAnswer = function(input) {
        if (parseInt(input) === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer!');
        }
    }
    
    function nextQ() {
            var length = questionArr.length;
            var rand = Math.floor(Math.random() * length);

            // Display question in console
            questionArr[rand].displayQuestion();


            var input = window.prompt('What is your answer?: ');
            
            if (input !== 'exit') {
                questionArr[rand].checkAnswer(input);
                
                nextQ();
            } 
        
    }

    var q1 = new Question('Do you like coding?', ['Yes','No'], 0);
    var q2 = new Question('Is JavaScript fun?', ['Yes','No'], 0);
    var questionArr = [q1, q2];
    
    nextQ();
    
 })();






























