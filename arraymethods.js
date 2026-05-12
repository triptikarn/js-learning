// to string
let names = ["Ram","Mohan","Sita","Ramesh"];

console.log(names.toString(",")); ///used for replace array

//Map
let salary = [2000,5000,10000,25000];

salary.map((value)=>{
    console.log(value+2000);
    
})

// Filter

let number = [9,7,11,5,6,3,7,4,5];

let result = number.filter((value)=>{
    console.log(value%2===0);

    return value%2 === 0;
    
})
console.log(result);


// reduce 
let number = [9,7,11,5,6,3,7,4,5];
 let result = number.reduce((acc,cv)=>{
    return acc+cv;
 })

 console.log(result);
 

