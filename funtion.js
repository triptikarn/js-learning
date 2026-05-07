// // 1. addition
function add(a,b){
    return(a+b);
}console.log(add(34,12));

// // 2. Print Hello world 
function add(a,b){
    return(a+b);
}console.log("hello","world");

// // 3. 
function sayhello(){
    return console.log("Hello Js !");
}
sayhello()

// // 4. Print three times  js learning 
function say(){
    return console.log("JS learning");
}
say()
say()
say()

// // 5. 
function Add(a,b){
    return a+b;
}
console.log(Add(12,38));

// //6. print  how many number of vowels  in education ? 
// //*** Important */
function countvol(str){
    let count = 0;

    for(let i = 0; i<str.length; i++){
        if(
            str[i] == "a"||
            str[i] == "e"||
            str[i] == "i"||
            str[i] == "o"||
            str[i] == "u"

        ){
            count++;
        }
    }
    console.log(count);
}
countvol("education");


// // 7.  odd/even 

function odd(a){
    if(a%2==0){
console.log("even");
 }else{
    console.log("odd");
 }
 return (a)
}
odd(4)

// //8. for the help of function print table ?
 function table(i){
    for (a=0;a<=10;a++){
        console.log(i*a);
    }
 }
 table(19)

// //9. 
 function check(a){
    if(a>0){
        console.log("positive number");
    }
    else if(a<0){
        console.log("negative number");  
    }
    else if(a==0){
        console.log("number is zero");
        
    }
}
check(0)



//iifee
// IIFE in function means:

// A function that runs immediately after being created.

// Full form:
// Immediately Invoked Function Expression....

//1.greeting
function main(){
    let name = "Arya";
    (
        function(){
            console.log("Hello"+name);
    })();
}main();


//2. Add 
(function (){
    let a = 10;
    let b = 20;
    let sum = a+b;
    console.log("Addition =",sum);
})();

//3.Square
(function (){
    let num = 125;
    console.log("sqaure =",num*num);
})();

//4. counter
(function (){
    let count = 0;
    count++;
    count++;
    count++;
    console.log("count=",count);
})();

// 5. one line function code
(function(){ console.log(10 + 20); })();

(function(){ console.log("Welcome to JavaScript"); })();

(function(){ console.log(50 / 5); })();

(function(){ console.log(5 * 5); })();

(function(){

   let numbers = [10, 20, 30];

   let total = 0;

   for(let i = 0; i < numbers.length; i++){
      total += numbers[i];
   }

   console.log("Total =", total);

})();
