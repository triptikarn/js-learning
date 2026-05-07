// 1. addition
function add(a,b){
    return(a+b);
}console.log(add(34,12));

// 2. Print Hello world 
function add(a,b){
    return(a+b);
}console.log("hello","world");

// 3. 
function sayhello(){
    return console.log("Hello Js !");
}
sayhello()

// 4. Print three times  js learning 
function say(){
    return console.log("JS learning");
}
say()
say()
say()

// 5. 
function Add(a,b){
    return a+b;
}
console.log(Add(12,38));

//6. print  how many number of vowels  in education ? 
//*** Important */
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
    
}countvol("education");


// 7.  odd/even 

function odd(a){
    if(a%2==0){
console.log("even");
 }else{
    console.log("odd");
    
 }
 return (a)
}
odd(4)

//8. for the help of function print table ?
 function table(i){
    for (a=0;a<=10;a++){
        console.log(i*a);
        
    }
 }
 table(19)

//9. 
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