"use strict";
// Datatypes in TypeScript  
// there are two types of datatypes in TypeScript
// 1. Primitive Datatypes (built-in datatypes)
// 2. Non-Primitive Datatypes (user-defined datatypes)
// primitive datatypes in TypeScript
// 1. number    
// 2. string
// 3. boolean
// 4. null
// 5. undefined 
// 6. symbol
// 7. bigint
// 8. void
// 9. any
// 10. never
// non-primitive datatypes in TypeScript
// 1. array 
// 2. tuple
// 3. enum
// 4. object
// 5. class
// 6. interface
// 7. function
// primitive datatypes in TypeScript
// 1. number --> represents both integer and floating point numbers and hexadecimal, octal, and binary literals
//example
let num1 = 42; // integer
let num2 = 3.14; // floating point 
let num3 = 0xFF; // hexadecimal
let num4 = 0o77; // octal
let num5 = 0b1010; // binary
console.log(num1, num2, num3, num4, num5);
//2 string --> represents a sequence of characters
//example   
let str1 = "Hello, typescript";
let str2 = 'This is a string';
let str3 = `This is a template string with ${str1}`;
console.log(str1, str2, str3);
let srtvar = str1 + str2;
console.log(srtvar);
//3 boolean --> represents a logical value that can be either true or false
//example
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);
//4 void --> represents the absence of a value
// it is used as the return type of functions that do not return a value
//example       
function greet() {
    console.log("Hello, World!");
}
greet();
//5 null and undefined --> null represents the intentional absence of any object value
// undefined represents a variable that has been declared but has not been assigned a value
//example
let nothing1 = null;
let notdefined1 = undefined;
console.log(nothing1, notdefined1);
// or you can use other way like 
let num6 = null;
let num7 = undefined;
console.log(num6, num7);
//6 any --> represents any type of value
// it is used when we do not know the type of value at compile time 
//example
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);
// but it is not recommended to use any type as it defeats the purpose of using typescript
// it is better to use unknown type instead of any type
let randomValue1 = 10;
randomValue1 = "Hello";
