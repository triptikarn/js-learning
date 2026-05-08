//1. Write  a javascript program to find the sum of all elements of a for loop . 

const num = [10,20,30,40,50];
let sum = 0;
for(let i=0; i<num.length; i++){
    sum+=num[i];
    // console.log(num[i]);  
}
console.log("sum:",sum);



//2. largest value 
const num = [10,20,30,40,50];
let largest = num[0];
for(let i=1; i<num.length; i++){
    if(num[i]>largest){
        largest = num[i];
    }
}
console.log(largest);

