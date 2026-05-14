// // //1. Write  a javascript program to find the sum of all elements of a for loop . 

// const num = [10,20,30,40,50];
// let sum = 0;
// for(let i=0; i<num.length; i++){
//     sum+=num[i];
//     // console.log(num[i]);  
// }
// console.log("sum:",sum);
// //---------------------------------------------------

// // //2. largest value 
// const num = [10,20,30,40,50];
// let largest = num[0];
// for(let i=1; i<num.length; i++){
//     if(num[i]>largest){
//         largest = num[i];
//     }
// }
// console.log(largest);
// //-----------------------------------------------

// // //  3.reverse the number 
// let num = [1,2,3,4,5];
// for(let i = num.length;i>=0;i--){
//     console.log(num[i]);
// }

// // ----------------------------------------------------

// // // swap the number
let arr = [40,10,20,30];
for(let i = 0; i<arr.length;i++){
    for(let j = 0; j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            // swap 
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);

// //------------------------------------------

// //4. Array example 
//  let fruits =["apple","mango","banana"]
// function checkFruit(value){
//     for(let i=0; i<fruits.length; i++)
//         {
//       if(fruits[i]==value){
//         return true;//found it
//       }
//     }
//     return false; // not found
// }
// console.log(checkFruit("tripti"));//true
// // //console.log(checkFruit("oran"));// false


// // --------------------------------------------

// //5. negative numbers
    
// let arr =[-2,5,-10,8];

// for(let i= 0; i < arr.length;i++){
//     for(let j = 0; j < arr.length-1; j++)
//         {
//         if(arr[j] > arr[j+1]){

//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

// // -------------------------------------------

// //6. Duplicate value 
// let arr = [4,2,4,1];

// for (let i = 0 ; i<arr.length; i++){
//     for(let j = 0; j< arr.length-1; j++){
//         if(arr[j] > arr[j+1]){
            
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);


// let arr = [23,45,56];
//  arr.push(55,66,22);

// arr.pop();


// prototype array 
let arr1  = [1,2,3,4,5,6];

let arr2 = [3,4,5,6,7,8];

arr1.klm = function(){
   console.log("This is arr");
   
}

// console.log(arr1.at(2));

Array.prototype.klm = function(){
  console.log("This is arr")
   
}
