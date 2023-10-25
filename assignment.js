
// Problem 1: Write a function to calculate the area of a triangle.
function rectangular(witdh, height) {
    const area = (height*witdh)/2;
 return   area;
}
console.log(rectangular(2,4));

// Problem 2: Write a function to convert degrees to radians.
function convertingDegToRad(degree) {
    console.log(Math.PI);
    console.log(degree*(Math.PI/180));
    console.log(degree * (3.1415 / 180)); 
//   console.log(degree * (3.14100 / 180));  
    return degree *(3.14159/180);
}
console.log(convertingDegToRad(33));
// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
    function factorialFun(n) {
        var factNum = 1;
        if (n==0|| n==1) {
            return factNum;
        }else if (n>1) {
            for (let i = 1; i <= n; i++) {
            factNum = factNum*i;
            }
            return factNum;
        }else{
            return "Numbrt has to be positive.";
        }
    }
    console.log(factorialFun(4));
    
// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrime(num) {
    // body...
  if (num<2) {
     return false;
  }
  for (let i = 2; i < num; i++) {
      if (num%i===0) {
return false;
      }
  }
  return true;
}

const result = isPrime(13);
console.log(result);

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
const prerson = {
    fName : "Kawsar",
    lName : "Ahmad",
    age: 27
}
const job = {
    jobName : "teaching",
    location: "Chittagong"
}
function mergeArrays(one, two) {
    let employe ={
        ...one,
        ...two
    }
    console.log(employe);
}
mergeArrays(prerson, job);
// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year) {
    if (year%4===0) {
        console.log('Leap year');
        return "This is a leap year";
    }else{
        console.log("Not Leap Year");
        return "Not Leap year";
    }
}
isLeapYear(1988);
console.log(isLeapYear(2033));
// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
const favFood = ["apple","mango", "apple","anaros", "anaros","apple","mango", "payeara", "orange"]
function removeDuplicates(arr) {
    console.log(arr);
    return [...new Set(arr)];
}
const removed = removeDuplicates(favFood);
console.log(removed);
// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(f) {
    // body...
 const result = (f-32)*5/9;
 return result;
}
console.log(convertToCelsius(50));
// Problem 9: Write a function to find the maximum of five numbers.
function maxOfFive() {
    const largest = Math.max(3,4,15,6,7)
    console.log(largest);
    return largest;
}
maxOfFive();
// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(stringPar) {
    if (stringPar.length%2===0) {
        console.log("even");
    }else{
        console.log("odd");
    }
}
evenOdd("JavaScript");
evenOdd("Hello");


//  Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

/*
Differences Between If-Else & Switch


The expression inside of an if statement decides whether to execute the statements inside the if block or under the else block. For switch, the expression inside switch statement decides which case to execute.

The if-else statement checks for equality as well as for logical expression. On the other hand, switch checks only for equality.

evaluation type:
The if statement evaluates integer, character, pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or an integer datatype.
Sequence of execution is like either statement under if block will execute or statements under else block statement will execute. However, the expression in the switch statement decides which case to execute and if you do not apply a break statement after each case it will execute till the end of switch statement.
For an if-else statement, if the expression inside of the if turn outs to be false, the statement inside of the else block will be executed. For the switch statement, if the expression inside of the switch statement turns out to be false then the default statements are executed.

readability:

if-else statement is completed to read
switch statement is easy to read

execution speed:

if else execution is slow compare to switch statement.
switch execution is fast compare to if else statement
*/


// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.
/*
var declarations are globally scoped or function scoped while let and const are block scoped.

var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
They are all hoisted to the top of their scope. 
But while var variables are initialized with undefined, let and const variables are not initialized.

While var and let can be declared without being initialized, const must be initialized during declaration

*/

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
/*
Scope of var
Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

let is block scoped
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with let  is only available for use within that block

let can be updated but not re-declared.
Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope



const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.

const cannot be updated or re-declared
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. 
*/


// 5. What is the difference between "null" and "undefined" in JavaScript?
/*
Undefined vs NULL

Undefined:
Undefined means a variable has been declared but has yet not been assigned a value.

Null
Null is an assignment value. It can be assigned to a variable as a representation of no value
It is a Primitive value in Javascript
*/




