 //Q.1 
 const A = {
    name : "Gaurav",
      callback : function(){
         // console.log(this.name);   
      }
}
A.callback();
// Output "Gaurav"  // object call kr rha h . 
 

// ------------------------------------------------------------------------------
 
// To check  normal function  of strict mode . 
const A  = {
    name:"Ishani",
    callback:function(){
       console.log(this.name); //it is for check strict mode and to call object from callback function .
   }
}
const a = A.callback;     // They both are      
a();                      //  direct function call do not call through object .

//output : undefined (Stirct Mode).

//...............................................................................


// To check normal function of Non-strict mode.
 const A = {
     name:"Ishani",
     callback:function(){
         console.log(this);  // console.log only this isliye likha gya h because to check non-strict mode . 
        
     }
 }
const a = A.callback;     // They both are      
 a();                 //  direct function call do not call through object .


// output : Window (non-strict Mode). 

/ ----------------------------------------------------------------------------------------------------------------------//

// Q no 2 Strict mode
 console.log(this);
 const A ={
    name : "Gaurav",
   callback : ()=>{
       console.log(this.name);
        
   }
 }
A.callback();

// callback khud ek arrow function h 
// or arrow function ka rule ye h ki uska apna :"this"; nhi hota 
// vo this outer scope se lega ya parent function se"They ignore object call". 
// aur yha arrow function ksi noraml function mai nhi h vo
//  directly global scope mai bna h constA{....}
// browser ke global scope mai this = window h 
// console.log(this.name )h to window.name hoga not A.name 
// isliye browser mai window print hoga  aur terminal mai 
// blank aur empty . 

//-----------------------------------------------------------
// Q.no3
console.log(this);
 this.name = "Raj";
const A = {
    name : "Gaurav",
 callback : ()=>{
    console.log(this.name);
    
 }
 }
  A.callback();

