///////////////////////////////////////
// Lecture: Hoisting
//calcAge(1965);
// Functions
// Hoisting only works for function declaration
// And not for function expression
//function calcAge(year) {
//    console.log(2016 - year + ' age');
//}


// Example with function expression

//retirement(1965);
//
//var retirement = function(year) {
//    console.log(65 - (2016 - year));
//}

/*
// Variables
console.log(age);
// The age variable here belongs to the global execution 
// context
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    // The age variable here belongs to the function foo's
    // execution context
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        third()
//    }
//}
//
//function third() {
//    var d = 'John';
//    console.log(a + d);
//}



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

//calcAge(1990);
//
//function calcAge(year) {
//    console.log(2016 - year);
//    console.log(this);
//}

var john = {
    name: 'John',
    year: '1990',
    calcAge: function () {
        console.log(this);
        console.log(2016 - this.year);
        
//        function innerFunc() {
//            console.log(this);
//        }
//        innerFunc();
    }
};

john.calcAge();

var mike = {
    name: 'Mike',
    year: 1984
};

mike.calculateAge = john.calcAge;
mike.calculateAge();












