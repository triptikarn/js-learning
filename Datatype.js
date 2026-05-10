/**
 * 1. Premitive data types
 * there are seven types of 
 * 1. Number
 * 2. String
 * 3. boolean
 * 4. null
 * 5. undefiend
 * 6. symbole
 * 7. BigInt
 
 * 2. Non Premitive data types
 * 1. Array
 * 2. object
 * 3. Function
 */


//Primitive Data Type:-
//1.number
let a = 12;
console.log(a);

//2.String
let b = "Ram";
console.log(b);

// 3.boolean
let c = true;
console.log(c);

//4.null
let a = null;
console.log(a);

//5.undefined
let b ;
console.log(b);


//6.symbole
let c = Symbol("Ambience");
console.log(c);

//7.BigInt
let b = BigInt(656464645648676+97+94649876694321654);
console.log(b);



//Non-primiitive Datatypes
//1.Array
//With the help of an array we can store more than one element under a single name .

const a = [12,45,true,false,"sita","ram",33];
//console.log(a);
console.table(a);


//2.object
//An object in JavaScript is an entity having properties and methods. Everything is an object in JavaScript.
//How to create an object in javaScript:


const b = {
    name:"Aradhya",
    class:"11", // Json 
    subject:"Science",
    Ispass:"true"
}
console.table(b);


// 3.Function
//  A function in JavaScript is a reusable block of code that performs a specific task when called.

const n = function(a,b){

  return a+b;
 }(12,45);
 console.log(n);

 
 
 function add(a,b){


     return a+b;
 };
 console.log(add(12,45));
 