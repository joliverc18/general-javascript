//JavaScript File

/******************************
    Variable data type and naming rules
    1. Cannot start name with numbers or symbols, except
       underscore or dollar sign.
    2. Cannot use JavaScript reserved words such as true,        false, if etc.
    
    JavaScript has dynamic typing where data types are automatically assigned to variables
*/

//var firstName = 'John';
//
//console.log(firstName);
//
//var lastName = 'Smith';
//var age = 28;
//
//var fullAge = true;
//console.log(fullAge);
//
//var job;
//console.log(job);
//
//job = 'Teacher';
//console.log(job);
//
//var temp = null;
//console.log(temp);


/******************************
    Variable mutation and type coercion
*/

//var firstName = 'John';
//var age = 28;

// JavaScript perform type coercion where age is convert to a    String to parse these 3 strings together
//console.log(firstName + ' ' + age);
//
//var job, isMarried;
//job = 'Teacher';
//isMarried = false;
//
//console.log('Job: ' + job);
//console.log('isMarried: ' + isMarried);

/******************************
    Variable mutation
    1. Redefining a variable 
*/

//age = 'twenty eight';
//job = 'driver';
//
//alert(firstName + ' is a ' + age + ' year old ' + job 
//     + '. Is he married? ' + isMarried);
//
////Pop up section prompt
//var lastName = prompt('What is his last name?');
//console.log(firstName + ' ' + lastName);

/******************************
    Basic operators
*/

////Math operators 
//var year, yearJohn, yearMark;
//ageJohn = 28;
//ageMark = 33;
//
//currentYear = 2018;
//yearJohn = currentYear - 28;
//yearMark = currentYear - 33;
//
//console.log(yearJohn);
//
//console.log(currentYear + 2);
//console.log(currentYear * 2);
//console.log(currentYear / 10);
//
////Logical Operator
//var johnOlder = ageJohn < ageMark;
//console.log(johnOlder);
//
////typeof operator
//console.log(typeof johnOlder);
//console.log(typeof ageJohn);
//console.log(typeof 'Mark is older than john');
//var x;
//console.log(typeof x);

/******************************
    Operator precedence
*/

//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;
//
////Multiple operator
//var isFullAge = now - yearJohn >= fullAge;
//console.log(isFullAge);
//
////Grouping
//var ageJohn = now - yearJohn;
//var ageMark = 35;
//var average = (ageJohn + ageMark) / 2;
//console.log(average);
//
//// Multiple assignments
//var x, y;
//x = y = (3 + 5) * 4 - 6;
//console.log(x, y);
//
//// More operators
//x *= 2;

/******************************
    Coding challenge 1
*/

/*
  Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula;
  BMI = mass / height^2 = mass / (height * height).
  (mass in kg and height in meter);
  
  1. Store Mark's and John's mass and height in variables
  2. Calculate bother their BMIs
  3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
  4. Print a String to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
  
*/

//var massMark, massJohn, heightMark, heightJohn, markBMI, johnBMI, isMarkHigher;
//massMark = 78;
//massJohn = 92;
//heightMark = 1.69;
//heightJohn = 1.95;
//
//markBMI = massMark / (heightMark**2);
//johnBMI = massJohn / (heightJohn**2);
//console.log(markBMI, johnBMI);
//
//isMarkHigher = markBMI > johnBMI;
//
//console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkHigher);

/******************************
    if / else statements
*/

//var firstName = 'John';
//var civilStatus = 'Single';
//
//if (civilStatus === 'married' ) {
//    console.log(firstName + ' is married.');
//} else {
//    console.log(firstName + ' is single.');
//}
//
//var isMarried = true;
//if (isMarried) {
//    console.log(firstName + ' is married.');
//} else {
//    console.log(firstName + ' is single.');
//}

/******************************
    Boolean logic
*/

//var firstName = 'John';
//var age = 16;
//
//if (age < 13) {
//    console.log(firstName + ' is a boy.');
//} else if ( age >= 13 && age < 20 ) {
//    console.log(firstName + ' is a teenager.');
//} else if ( age >= 20 && age < 30 ) {
//    console.log(firstName + ' is a young man.');
//} else {
//    console.log(firstName + ' is a man.');
//}

/******************************
 *  Ternary operator and Switch statements
 */

//var firstName = 'John';
//var age = 22;
//
////Condition ? true instructions : false instructions
//age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//
////Use ternary operators for simple decisions like this
//var drink = age >= 18 ? 'beer' : 'juice';
//console.log(drink);

//Use if-else statements over ternary when making a complex decision
//if (age >= 18) {
//    var drink = 'beer';
//} else {
//    var drink = 'juice';
//}
//
//console.log(drink);

// Switch statement
//var job = 'teacher';
//
//switch (job) {
//    case 'teacher':
//    case 'instructor':
//        console.log(firstName + ' teaches kid how to code.');
//        break;
//    case 'driver':
//        console.log(firstName + ' drives an uber in Libson.');
//        break;
//    case 'designer':
//        console.log(firstName + ' designs beautiful websites.');
//        break;
//    default:
//        console.log(firstName + ' does something else.');
//}
//
//switch(true) {
//    case age < 13:
//        console.log(firstName + ' is a boy.');
//        break;
//    case age >= 13 && age < 20:
//        console.log(firstName + ' is a teenager.');
//        break;
//    case age >= 20 && age < 30:
//        console.log(firstName + ' is a young man.');
//        break;
//    default:
//        console.log(firstName + ' is a man.');
//}

/******************************
 *  Truthy and Falsy values and equality operators
 */

// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values

//var height = 23;
//
//if (height) {
//    console.log('Variable is defined');
//} else {
//    console.log('Variable has NOT been defined');
//}
//
//// Equality Operators
//
//// The == sign compares regardless of data type
//if (height == '23') {
//    console.log('The == does type coercion!');
//}
//
//// The === sign compare same data types
//console.log( height === '23' ? true:false);

/******************************
 *  Coding challenge 2
 */

// Part 1
//var avgJTeam = (89 + 120 + 103) / 3;
//var avgMTeam = (116 + 94 + 123) / 3;
//
//// Part 2
//var winner;
//
//if (avgJTeam > avgMTeam) {
//    winner = 'John';
//} else if (avgJTeam === avgMTeam) {
//    winner = 'Draw';
//} else {
//    winner = 'Mike';
//}
//
//switch(winner) {
//    case 'John':
//        console.log('John is the winner! Average score ' + avgJTeam);
//        break;
//    case 'Mike':
//        console.log('Mike is the winner! Average score ' + avgMTeam);
//        break;
//    default:
//        console.log('It was a draw! Both teams score ' + avgJTeam + avgMTeam);
//}

// Part 3 

//avgJTeam = (189 + 140 + 109) / 3;
//avgMTeam = (116 + 94 + 123) / 3;
//
//
//if (avgJTeam > avgMTeam) {
//    winner = 'John';
//} else if (avgJTeam === avgMTeam) {
//    winner = 'Draw';
//} else {
//    winner = 'Mike';
//}
//
//switch(winner) {
//    case 'John':
//        console.log('John is the winner!');
//        break;
//    case 'Mike':
//        console.log('Mike is the winner!');
//        break;
//    default:
//        console.log('It was a draw!');
//}

// Part 4

//var avgMary = (97 + 134 + 105) / 3;
//
//if (avgJTeam > avgMTeam && avgJTeam > avgMary) {
//    winner = 'John';
//} else if (avgMTeam > avgJTeam && avgMTeam > avgMary) {
//    winner = 'Mike';
//} else if (avgMary > avgJTeam && avgMary > avgMTeam) {
//    winner = 'Mary';
//} else {
//    winner = 'Draw';
//}
//
//switch(winner) {
//    case 'John':
//        console.log('John is the winner! Average score ' + avgJTeam);
//        break;
//    case 'Mike':
//        console.log('Mike is the winner! Average score ' + avgMTeam);
//        break;
//    case 'Mary':
//        console.log('Mary is the winner! Average score ' + avgMary);
//        break;
//    default:
//        console.log('It was a draw! All teams scores ' + avgJTeam, avgMTeam, avgMary);
//}

/******************************
 *  Functions
 */

//function calculateAge(birthYear) {
//    return 2018 - birthYear;
//}
//
//function yearsUntilRetirement(year, firstName) {
//    var age = calculateAge(year);
//    var retirement = 65 - age;
//    if (retirement > 0) {
//        console.log(firstName + ' retires in ' + retirement + ' years');
//    } else {
//        console.log(firstName + ' has retired');
//    }
//}
//
//yearsUntilRetirement(1990, 'John');
//yearsUntilRetirement(1948, 'Mike');
//yearsUntilRetirement(1969, 'Jane');

/******************************
 *  Functions Statements and Expressions
 */

// Function declaration
// function whatDoYouDo (job, firstName) {}

// Function expression
//var whadDoYouDo = function(job, firstName) {
//    switch(job) {
//        case 'Teacher':
//            return firstName + ' teaches kid how to break';
//        case 'Driver':
//            return firstName + ' drives uber in Libson.';
//        case 'Designer':
//            return firstName + ' designs beautiful websites';
//        default:
//            return firstName + ' does something else';
//    }
//}
//
//console.log(whadDoYouDo('teacher','John'));

/******************************
 *  Arrays
 */

// Initialize new array
//var mixed = ['John', 'Smith', 18, 'teacher', false];
//var names = ['John', 'Ben', 'Ali'];
//var years = new Array(1990, 1969, 1948);
//
//console.log(mixed);
//console.log(mixed.length);
//
//// Mutate the array 
//mixed[1] = 99;
//console.log(mixed);
//
//// Add to the array
//mixed[mixed.length] = 'JavaScript';
//console.log(mixed);
//
//// Array methods
//mixed.push('Hello World!'); // Add to the end of array
//mixed.unshift('Mr.');       // Add to the start of array
//console.log(mixed);
//
//mixed.pop();    // Remove the last element of array
//mixed.pop();    // Remove the last element of array
//mixed.shift();  // Remove the first element of array
//console.log(mixed);
//
//// Return position of 'Smith' in the array
//console.log(mixed.indexOf('teacher')); 
//// If item is not in the array it will return -1
//console.log(mixed.indexOf('Smith')); 

/******************************
 *  CODING CHALLENGE 3
 */

//var bills = [124, 48, 268];
//var tipAmount = function(bill) {
//    switch(true) {
//        case bill < 50:
//            return 0.20 * bill;
//        case bill >= 50 && bill < 200:
//            return 0.15 * bill;
//        default:
//            return 0.10 * bill;
//    }
//    
//}
//
//
//var tips = [tipAmount(bills[0]), 
//            tipAmount(bills[1]), 
//            tipAmount(bills[2])];
//
//var total = [tips[0] + bills[0], 
//             tips[1] + bills[1], 
//             tips[2] + bills[2]];
//
//console.log(bills);
//console.log(tips);
//console.log(total);

/******************************
 *  Objects and properties
 */

// Object literal
//var john = {
//    // key : value
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1990,
//    family: ['Jane', 'Mark', 'Emily'],
//    job: 'teacher',
//    isMarried: false
//};
//
//// Different ways of Accessing the object
//console.log(john.firstName); // dot notation
//console.log(john['lastName']); //bracket notation
//var x = 'birthYear';
//console.log(john[x]);
//
//// Mutate the object
//john.job = 'designer';
//john['isMarried'] = true;
//console.log(john);
//
//// Initializing objects
//var jane = new Object();
//jane.name = 'Jane';
//jane.birthYear = 1969;
//jane['lastName'] = 'Smith';
//console.log(jane);

/******************************
 *  Objects and methods
 */

//var john = {
//    // key : value
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1992,
//    family: ['Jane', 'Mark', 'Emily'],
//    job: 'teacher',
//    isMarried: false,
//    calcAge: function() {
//        this.age = new Date().getFullYear() - this.birthYear;
//    }
//};
//
//john.calcAge();
//console.log(john);

/******************************
 *  Coding Challenge 4
 */

//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    mass: 92,
//    height: 1.95,
//    calcBMI: function() {
//        this.BMI = this.mass / this.height**2;
//    }
//};
//
//var mark = {
//    firstName: 'Mark',
//    lastName: 'Lopez',
//    mass: 78,
//    height: 1.69,
//    calcBMI: function() {
//        this.BMI = this.mass / this.height**2;
//    }
//};
//
//john.calcBMI();
//mark.calcBMI();
//
//if(john.BMI > mark.BMI) {
//    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI: ' + john.BMI);
//} else if (john.BMI < mark.BMI) {
//    console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI: ' + mark.BMI);
//} else {
//    console.log(john.firstName + ' and ' + mark.firstName + ' has the same BMI');
//}

/******************************
 *  Loops and Iteration
 */

// For loop
//for (var i=1;i<=20;i+=2) {
//    console.log(i);
//}
//
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
//for(var i=0;i<john.length;i++) {
//    console.log(john[i]);
//}
//
//// While loop
//var i=0;
//
//while(i < john.length) {
//    console.log(john[i]);
//    i++;
//}

// continue and break statements
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

//for(var i=0;i<john.length;i++) {
//    if (typeof john[i] !== 'string') 
//        continue;
//    console.log(john[i]);
//}
//
//for(var i=0;i<john.length;i++) {
//    if (typeof john[i] !== 'string') 
//        break;
//    console.log(john[i]);
//}

// Print the array in reverse
//for(var i=john.length-1;i>=0;i--) {
//    console.log(john[i]);
//}

/******************************
 *  Coding Challenge 5
 */

/*
    John
    Bills : 124, 48, 268, 180, 42
    20%, when bill less than 50
    15%, when bill between 50 and 200
    10%, when bill more than 200
    
    Mark
    Bills: 77, 375, 110, 45
    20%, when bill less than 100
    10%, when bill between 100 and 300
    25%, when bill more than 300
*/

//var john = {
//    fullName: 'John Smith',
//    bills: [124, 48, 268, 180, 42],
//    tipCalc: function() {
//        this.tips = [];
//        this.total = [];
//        
//        for(var i=0;i<this.bills.length;i++) {
//            var bill = this.bills[i];
//            var tip;
//            
//            if(bill < 50) {
//                tip = 0.2 * bill;
//            } else if (bill >= 50 && bill < 200) {
//                tip = 0.15 * bill;
//            } else {
//                tip = 0.1 * bill;
//            }
//            
//            this.tips.push(tip);
//            this.total.push(tip + bill);
//        }
//    }
//};
//
//john.tipCalc();
//
//console.log(john);
//
//var mark = {
//    fullName: 'Mark Lopez',
//    bills: [77, 5, 110, 45],
//    tipCalc: function() {
//        this.tips = [];
//        this.total = [];
//        
//        for(var i=0;i<this.bills.length;i++) {
//            var bill = this.bills[i];
//            var tip;
//            
//            if(bill < 100) {
//                tip = 0.2 * bill;
//            } else if (bill >= 100 && bill < 300) {
//                tip = 0.1 * bill;
//            } else {
//                tip = 0.25 * bill;
//            }
//            
//            this.tips.push(tip);
//            this.total.push(tip + bill);
//        }
//    }
//};
//
//mark.tipCalc();
//
//console.log(mark);
//
//function calcAvg(obj) {
//    var tipArray = obj.tips;
//    var sum = 0;
//    
//    for(var i=0;i<tipArray.length;i++) {
//        sum += tipArray[i];
//    }
//    
//    return sum/tipArray.length;
//}
//
//var whoPayHigher = calcAvg(john) > calcAvg(mark) ?
//                    console.log(john.fullName + ' paid higher ' + calcAvg(john)) :
//                    console.log(mark.fullName + ' paid higher ' + calcAvg(mark));
























