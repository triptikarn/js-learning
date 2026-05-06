// // ques 1 Print numbers 1 to 10 ?

for(let i = 1; i<=10; i++){
    console.log(i);
}

// // ------------------------------------------------------------

// // ques 2 Print even numbers from 1 to 20 ?

for(let a = 1; a<=20; a++){
    if(a % 2 === 0){
        console.log(a);
        
    }
}

// //-------------------------------------------------------

// //  ques 3 Reverse a number ?
let num = 123;
let reverse = 0;
while(num > 0){
    let digit = num % 10;
    reverse = reverse*10 + digit;
    num = Math.floor(num/10)
}
console.log(reverse);

// //---------------------------------------------------------

// ques 4  check even or odd ?
let num = 4;
if(num % 2 === 0){
    console.log("even");  
}else{
    console.log("odd"); 
}

// // -------------------------------------------------------

// // ques 5 Print 1 to 10 number and skip 5 ?
 for(let b = 1; b<=10; b++){
    if(b===5){
        continue;
    }console.log(b);
 }

// // ----------------------------------------------------------

// // ques 6 Print odd number ? 
for( let a = 1; a<=20; a++){
    if(a % 2 !== 0){
        console.log(a);
    }
}

// // -------------------------------------------------

// ques 7 Back count ?
 for(let i = 10; i>=1; i--){
    console.log("i=",i);
 }

// //--------------------------------------------------

// // ques 8 Print Table of 5 ?
for(let i = 1; i<=10; i++){
console.log(i*5);
}

// //--------------------------------------------------

// // ques 9  find sum of 1 to 100 ?
sum = 0;
for( let i = 1; i<=100; i++){
    sum+= i;
}console.log(sum);

// //-------------------------------------------------

//  // ques 10 print factorial of 1 ?
 let fact = 1;
 for( i = 5; i>=1; i--){
    fact*=i;
 }console.log(fact);
 

// //------------------------------------------------------

// // ques 11  matrics ? 
let n = 12;
fact = 1;

for(let i =1;i<=n;i++){
    fact*=i;
}console.log(fact);
for(let i=5; i<=1; i++){
    let star ="";
    for(let j=1; j<=i; j++){
        star=star+"*";
    }
    console.log(star);
}

//  //-------------------------------------------

 // ques 12 print  * ?
 for(let i = 1; i<=5;i++){
    let star ="";
    for(let j=1; j<=i; j++){
        star=star+"*";
    }
    console.log(star);
 }

// //-------------------------------------------

// // ques 13 reverse * ?
for(let i = 1; i<=5; i++){
     let star ="";
     for(let j=5; j>=i; j--){
         star=star+"*";
     }
    console.log(star);
}

// //-----------------------------------------------------

// // ques 14 print an isosceles triangle pattern using stars with the help of loops ? 
for(i=1; i<=5; i++){
    let patter = "";

    for(let j=1; j<=5-i; j++){
        patter += " "
    }
    for(let k=1; k <= (2*i-1); k++){
        patter += "*"
    }
    console.log(patter);
}