"use strict";
//how to delcare the string 
// delecare variable and assign type 
//example 
let mystring = "Welcome to javascript"; // delecred in js 
//in typescript 
let mytsstring = "welcome to typescript";
//using charAt() --> this method returns the character at the given index 
// example
console.log(mytsstring.charAt(0)); //W
//concat() --> used to connect 2 string 
//example 
let strr1 = "&";
mystring.concat(strr1).concat(mytsstring); //
//replace --> used to replace char in string 
let spacestr = strr1.replace("&", " & ");
console.log(strr1);
console.log(mystring.concat(spacestr).concat(mytsstring));
