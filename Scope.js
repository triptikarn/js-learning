//  --------------------------- 1 
   var a = 100;
    a = 200;
  console.log(a);//200
  
   function random(){
    a = 200;

    var a = 18;
    console.log(a);//18
    return a;
   }
   random()

   console.log(a);//200


// ------------------------------------ 2
var a = 100;
a = 20;
console.log(a);//20

function random(){
    a = 200;

    var  a = 10;
    console.log(a);//10
   return a ; 
    
}
random()
console.log(a);//20

// --------------------------- 3
   var d = 200;
   var e = 10;

   console.log(d);//200
   {
    var d = 300;
    d = 500 + e ;
    console.log(d); //510
    
   }
   console.log(d);//510
 

//--------------------------- 4 
   let x = 10;

   function test(){
    x = 5;
   if(x > 20){
    var x = 5;
    console.log(x);//5
   }else{
    console.log("hello");// hello
   }
   }
   test()


//--------------------------- 5
let  a = 50;
var b = 40;   //90

console.log(b);//40
console.log(a);//50

// var b = 90; // intialization 
// let a = 200; //error

function call(){
    //  console.log(b);   
    console.log(a);   //Errp

    let b = 55;
    var a = 65;
    console.log(a);
    console.log(b);
}
call();

console.log(a);
console.log(b);

console.log(a);
console.log(b);

{
    console.log(a);
    console.log(b);
    
    
}


