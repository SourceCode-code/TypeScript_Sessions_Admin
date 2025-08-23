"use strict";
// Operators in Typescript
// we have following operators in Typescript
//1 Arthimatic Operators 
//2 Assignment Operators 
//3 Comprasion/regional operators
//4 Logical Operators
//Arthimatic Operators --> These operators are used to perform mathimatical operations
//examples are 
/*
+ ->Addition
- ->Subtraction
* ->Multiplication
/ ->division
% ->Modulus (divison reminder)
**->Exponentional
++->Increment
--  Decrement
*/
// code 
let numb1 = 10;
let numb2 = 20;
console.log(numb1 + numb2);
console.log(numb1 - numb2);
console.log(numb1 * numb2);
console.log(numb1 / numb2);
console.log(numb1 % numb2);
console.log(Math.pow(numb1, numb2));
console.log(numb1++); // post increment 
console.log(++numb1); // pre increment
console.log(numb1--);
console.log(--numb1);
//Assignment Operators --> These are used to assign value 
//examples 
/*

= -> assigment  x=y
+= --> assignemnt x= x+y
-= --> assignemnt x= x-y
*= --> assignemnt x= x*y
/= --> assignemnt x= x/y
%= --> assignemnt x= x%y
*/
//code
console.log(numb1 += numb2);
console.log(numb1 -= numb2);
console.log(numb1 *= numb2);
console.log(numb1 /= numb2);
console.log(numb1 %= numb2);
//Comparsion Operators--> These are used to comapre values 
//examples
/*

==  equal to
=== equal value and datatype
<   less than
>   greater than
<=   less than equal to
>=   greater than equal to
?    ternary opertor
*/
//code
console.log(numb1 == numb1);
console.log(numb1 === numb1);
console.log(numb1 >= numb1);
console.log(numb1 <= numb1);
console.log(numb1 < numb1);
console.log(numb1 > numb1);
console.log(numb1 != numb1);
console.log(numb1 < numb2 ? numb1 : numb2); // if numb1 is less than numb2 show numb1 if not show numb2
//Logical Operators --> These are used to peroform logical operations 
/*

&&   AND
||   OR
!    NOT
*/
// AND (&&)
/*
 * T && T  ==> True

 * F && F  ==> False
 * T && F  ==> False
 * F && T  ==> False
 */
console.log(4 > 3 && 10 > 5); // Output: true
console.log(2 > 3 && 10 > 5); // Output: false
// OR (||)
/*
 * T || T  ==> True
 * F || F  ==> False
 * T || F  ==> True
 * F || T  ==> True
 */
console.log(4 > 3 || 10 > 5); // Output: true
console.log(2 > 3 || 10 > 5); // Output: true
// NOT (!)
/*
 * !T ==> False
 * !F ==> True
 */
console.log(!(4 > 3)); // Output: false 
