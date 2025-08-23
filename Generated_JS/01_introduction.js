"use strict";
// typescript is a open source language and superset of JavaScript developed by Microsoft
// typescript is complied to JavaScript
// typescript is a strongly typed language  
// typescript is a statically typed language
// typescript is an open source language
// typescript is a superset of JavaScript that compiles to plain JavaScript
// typescript is developed and maintained by Microsoft
// typescript is designed for the development of large
// it is es6 version of JavaScript
//offical url :- https://www.typescriptlang.org/
//why typescript required?
// js is a dynamic language but it does not have type system
// we need type system to avoid runtime errors and make the code more readable and imporve code quality
// we can get the error at compile time instead of runtime
// how to use typescript?
// typescript is a superset of JavaScript, so we can use it in our existing JavaScript codebase
// we can use typescript in our existing JavaScript codebase by renaming the file extension from .js to .ts
// you will need a typescript compiler to compile the typescript code to JavaScript
// to run a typescript file, we need to install typescript globally
// npm install -g typescript    
// to run in terminal use command
// tsc 01_introduction.ts
// this will compile the typescript file to JavaScript file with same name but .js extension
// we can run the generated JavaScript file using node.js
// node 01_introduction.js
//Features of typescript
// typescript enables type saftey in js example ( 2 + "2" ) will give error in typescript but not in js
// cross platform : TS can run on any platform that supports JavaScript
// object oriented : TS supports object oriented programming concepts like classes, interfaces, inheritance, etc.
// static typing : TS is a statically typed language, which means that we can define the types of variables, function parameters, and return values
//optional static typing : TS allows us to define types for variables, function parameters, and return values, but it is not mandatory
//dom manipulation : TS provides type definitions for the DOM, which allows us to manipulate the DOM using types    
// ES6 features : TS supports all the features of ES6, including arrow functions, template literals, destructuring, etc.
// type inference : TS can automatically infer the types of variables, function parameters, and return values based on the assigned values
// interfaces : TS allows us to define interfaces, which are contracts that define the structure of an object
// enums : TS supports enums, which are a way to define a set of named constants
//advantages of typescript
// open source and mainatained by Microsoft
//all ts code is valid js code
//ts is clsoer in syntax to backend languages like Java, C#, etc.
// difference between typescript and javascript 
// typescript is  object oriented langauge which is a superset of JavaScript, which means that all JavaScript code is valid TypeScript code
// typescript is a statically typed language, while JavaScript is a dynamically typed language
// typescript has a type system, while JavaScript does not have a type system
// typescript code need to complied
// typescript requires static type 
// typescript supports interfaces, while JavaScript does not support interfaces
// it has a optional parameter and rest feature 
// generic and modules are supported in typescript
// number and string are interfaces in typescript, while in JavaScript they are primitive types
// how to setup typescript in a project?
// open editor and paste  " npm install typescript -g --save-dev " in terminal
// 
// example of typescript code
let greeting1 = "Hello, TypeScript!";
console.log(greeting1);
