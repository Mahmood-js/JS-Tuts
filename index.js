// alert("Hello World");

// console.log("Hello World");

// // 8 * 3;
// // 8 - 3;
// // 8 / 3;
// // 8 + 3;

// // 8 > 3;
// // 8 < 3;

// // Values and Variables

// var myName = "Mahmood Ahmad";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// // Naming convensions

// // Data types

// // undefined (✔)
// // Boolean (✔)
// // number (✔)
// // Stringbigint (❌)
// // symbol (❌)

// console.log(typeof myName);

// // Datatype Practice
// console.log(10 + "20"); // 1020

// console.log(9 - "4"); // 5 (Bug)

// console.log("Java      " + "Script");

// console.log(" " + "0"); // 0

// console.log("Mahmood" - "Ahmad"); // NaN

// console.log(true + true); // 2
// console.log(true + false); // 1
// console.log(false + true); // 1
// console.log(false - true); // -1

// // Difference b/w null vs Undefined 🙋‍♂️🙋‍♂️🙋‍♂️(1st Interview Question)
// // -we assign any variable a null(2nd bug is that it is an object) value but if we dont assign any value to a variable it will undefine

// // What is NaN 🙋‍♂️🙋‍♂️🙋‍♂️(2nd Interview Question)
// // -Nan is property of a global object
// // -In other words, it is a variable in global scope
// // -The initial value of Nan is Not-a-Number
// // -It occures when we subtract two strings
// // We can also check weather value is not a NaN or not
// console.log(isNaN(myName)); // Ture
// console.log(isNaN(myAge)); // False

// console.log(NaN === NaN); // False
// console.log(Number.Nan === NaN); // False
// console.log(isNaN(NaN)); // True
// console.log(isNaN(Number.NaN)); // True
// console.log(Number.isNaN(NaN)); // True

// // Operators // Operators // Operators // Operators // Operators // Operators
// // Assignment Operators (=)
// // Arithmethic Operators (+, -, *, /, %)
// // Comparison Operators (==, >, <)
// // Logical Operators(&&, ||, !)
// // String Operators (Concatination(union))
// // Conditional (ternary) Operators (if-else)
// // Increment (x++(Postfix) or ++x(Prefix)) & Decrement (x-- or --X) Operator

// // Postfix (x++)
// var num = 15;
// var newNum = num++; // first it will assign num value in newNum and the it will increase in itself(num) variable
// console.log(num);
// console.log(newNum);

// // Prefix(++x)
// var num = 15;
// var newNum = ++num; // Here first it will make increase in itself(num) then it will assign new value to newNum variable
// console.log(num);
// console.log(newNum);

// // Challange 🤔🤔🤔 // Challange 🤔🤔🤔 // Challange 🤔🤔🤔
// // Output of 3**3 (Exponentiation operator) (3^3)
// // Output when we add number and a string (when you try to concatinate it will concatinate but when you try to subtract then it will  return NaN)
// // Program to swap two numbers
// // c = a;
// // b = a;
// // a = c;
// // Program to swap two number without using third variable
// // a = a + b;
// // b = a - b;
// // a = a - b;

// // Difference b/w == (check vallue not type) & === (Check value and type as well)

// // Control Statement & Loops // Control Statement & Loops // Control Statement & Loops

// raining = true;
// if (raining) {
//   console.log("Rain CoaT Required");
// } else {
//   console.log("Rain Coat Not Required");
// }

// // Challange 🤔🤔🤔 // Challange 🤔🤔🤔 // Challange 🤔🤔🤔
// // Program weather entred Year is leap year or not
// var year = 2021;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log(year + " is Leap Year");
//     } else {
//       console.log(year + " is NOT Leap Year");
//     }
//   } else {
//     console.log(year + " is Leap Year");
//   }
// } else {
//   console.log(year + " is NOT Leap Year");
// }

// // Challange 🤔🤔🤔 // Challange 🤔🤔🤔 // Challange 🤔🤔🤔
// // Truthy (Any value other then falsy)
// // Falsy (0, "", undefined, null, Nan, false)

// // Conditional (ternary) operator (short if..else...)
// // The operator is the only JS Operator that takes three operends
// // Syntax:  variablename = condition ? value1 : value2;

// // Switch Break Stetement
// let area = "circle";
// switch (area) {
//   case "circle":
//     console.log("Circle Area");
//     break;
//   case triangle:
//     console.log("Triangle Area");
//     break;
//   default:
//     console.log("Try Again");
// }

// // // else-if condition
// // if (time < 10) {
// //   greeting = "Good morning";
// // } else if (time < 20) {
// //   greeting = "Good day";
// // } else {
// //   greeting = "Good evening";
// // }

// // while Loop
// num = 0;
// // while (num <= 10) {
// //   console.log(num);
// //   num++;
// // }

// // do-while Loop
// num = 0;
// // do {
// //   console.log(num);
// //   num++;
// // } while (num <= 10);

// // For loop
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// // Challange 🤔🤔🤔 // Challange 🤔🤔🤔 // Challange 🤔🤔🤔
// // program to print table for entered Number
// var tableNumber = 8;
// for (let index = 0; index <= 10; index++) {
//   console.log(tableNumber + " * " + index + " = " + tableNumber * index);
// }

// // Function // Function // Function // Function // Function // Function
// // 1️⃣Function Defination
// function myFunction(p1, p2) {
//   // p1 and p2 are Parameters
//   return p1 * p2; // The function returns the product of p1 and p2
// }
// // 2️⃣Function calling
// console.log(myFunction(1, 2)); // 1 and 2 are Arguments

// // What is Function Parameters & Function Argumnents 🙋‍♂️🙋‍♂️🙋‍♂️
// // Parameters are entered in function defination Arguments are entered in Function calling

// // Why Functions 🙋‍♂️🙋‍♂️🙋‍♂️
// // We can reuse code

// // 3️⃣Return Statement

// // Annonymous Function (Function without name)
// // Definations
// var funExp = function (a, b) {
//   return a + b;
// };

// // Calling
// var sum = funExp(10, 20);

// ECMAScript
// Let(For Block Scope) vs Const(Unchangeable values) vs Var(For Global Scope)

// What is Tamplate literals 🙋‍♂️🙋‍♂️🙋‍♂️
// // use backtick for string and can write variable values or simple values as well for example.
// var tableNumber = 8;
// for (let index = 0; index <= 10; index++) {
//   console.log(`${tableNumber}  *  ${index} = ${tableNumber * index}`);
// }

// // Default Parameters (We can give default values in parameters place)
// function multiplyNumbers(a = 1, b = 2) {
//   return a * b;
// }

// console.log(multiplyNumbers());

// Fat Arrow Function
// For multiple line of statement
// const multiplyNumbers = (a, b) => {
//   return a * b;
// };

// For one line Statement we can leave return statement without return
// const multiplyNumbers = (a, b) => {
//   a * b;
// };

// console.log(multiplyNumbers(2, 3));

// Arrays // Arrays // Arrays // Arrays // Arrays
// When we want to store multiple values in one variable of any datatype
// In JS we have an array class & arrays are the prototype of this class
// e.g.,
// var myFriends = ["Ahmad", "Osama", "Faizan", True, 2183908];

// 1️⃣Traversal in array (Navigate through an array)
// var myFriends = ["Ahmad", "Osama", "Faizan", 2183908];
// console.log(myFriends[1]); // This will get the value placed on index 1(Osama) and Index of an array always starts from 0

// // How to find length of an array
// console.log(myFriends.length); // This count starts from 1 not from 0 as Array so lat Element will be as (total-length - 1)

// // Access Array through For Loop
// for (let index = 0; index < myFriends.length; index++) {
//   console.log(myFriends[index]);
// }

// // For..in Loop :: 🎓🎓🎓 It only returning index number of iterating index
// for (const key in myFriends) {
//   console.log(key); // key is the index number
// }
// // For..of Loop :: 🎓🎓🎓 It is returning Element values of iterating index
// for (const iterator of myFriends) {
//   // iterator stores the value at that index like (iterator = myFriends[index-number])
//   console.log(iterator);
// }

// // For..each Loop :: 🎓🎓🎓 It is returning Element values of iterating index
// myFriends.forEach((element) => {
//   console.log(element); // element stores the value at that index like (element = myFriends[index-number])
// });

// // 2️⃣Searching and Filter in an array
// // indexOf()
// console.log(myFriends.indexOf("Osama", 2)); // It tells about the index of entered value in first parameter and 2nd Parameter represents from which index should he start search of the value of (parameter-1) // It will return -1 if compiler doesn't found any matched value in the array. // Its search starts from start

// // lastIndexOf()
// console.log(myFriends.lastIndexOf("Osama")); // It will return the value index starting search from last index. // Its search starts from start

// // includes()
// console.log(myFriends.includes("Osama")); // It will find the value, if this is available in the array or not and will return True or false in return
// It will Scans the whole array start from any index but don't search backwords

// const prices = [100, 1700, 200, 900, 300, 400, 500, 450, 456];
// // find()
// console.log(
//   prices.find(function (prices) {
//     // It will fint run the condition and return the only one value which will become true first and returns undefined if not found
//     return prices < 300;
//   })
// );

// findIndex()
// console.log(
//   prices.findIndex(function (prices) {
//     // It will fint run the condition and return the only one value's index which will become true first and returns -1 if not found
//     return prices < 300;
//   })
// );

// // filter() // if we want to get all the elements which fall in true category and returns empty array if not found
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 400;
// });
// console.log(newPriceTag);

// // 3️⃣How to sort an arry?

// console.log(prices.sort()); // It first convert them in string first and then it will sort according to string method meaning like we find words in physical dictionary

// 4️⃣Perform CRUD
// push() // Adds new value to the end of the array
// It will return new length of an array
// const animals = ["dog", "cats", "Sheeps"];
// animals.push("goats");

// unshift() // Adds new value to the start of the array
// returns news length of the array
// animals.unshift("chicken");

// pop() // it will remove last value from the array
// chages the array length and return the last value
// const animals = ["dog", "cats", "Sheeps"];
// animals.pop();
// console.log(animals);

// shift() It will remove the first value from the array
// const animals = ["dog", "cats", "Sheeps"];
// animals.shift();
// console.log(animals);

// Challange 🤔🤔🤔// Challange 🤔🤔🤔// Challange 🤔🤔🤔
// CH1::Add dec to the end of the array
// CH2::What is the return value of splice method?
// CH3::update march to March (update)
// CH4::Delete June from an array?

const months = ["Jan", "Feb", "march", "April", "June", "July"];
// Splice() can update, remove, delete and add
//
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @returns — An array containing the elements that were deleted.
// Sol1:
// const newMonth = months.splice(months.length, 0, "dec"); //(method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)
// console.log(months);
// Sol2:
// console.log(newMonth); // It will return the deleted value from the array
// Sol3:
// 1️⃣
// console.log("Before Updation");
// console.log(months);
// const marchIndex = months.indexOf("march");
// if (marchIndex != -1) {
//   months.splice(marchIndex, 1, "March"); // will delete 'march' and add 'March' on that place
// } else {
//   console.log("No data found");
// }
// console.log("After Updation");
// console.log(months);

// 2️⃣
// const marchIndex = months.indexOf("march");
// if (marchIndex != -1) {
//   months.splice(marchIndex, 1); // will delete only 'march' as mentioned to delete 1 if you replace 1 with 2 then it will delete 2 values from that(marchIndex) index
// } else {
//   console.log("No data found");
// }
// console.log(months);

// 3️⃣
// const marchIndex = months.indexOf("march");
// if (marchIndex != -1) {
//   months.splice(marchIndex, Infinity); // will delete all values after 'march'
// } else {
//   console.log("No data found");
// }
// console.log(months);

// map()
// (returns) creates a new array from calling a function for every array element.
// calls a function once for each element in an array.
// does not execute the function for empty elements.
// does not change the original array.

// map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
// A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
const array1 = [1, 2, 3, 9, 54, 65, 0, 56];
let newArr = array1.map((currenElement, index, arr) => {
  return currenElement > 3;
});
console.log(array1);
console.log(newArr);

// Challange 🤔🤔🤔// Challange 🤔🤔🤔// Challange 🤔🤔🤔
