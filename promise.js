const recdata = new Promise((resolve,reject)=>{
    let user = true;

    if(user){
        resolve("Welcome")
    }else{
        reject("Login Failed....")
    }

    setTimeout(() => {
        console.log("Wait a sec....");
        
    }, 3000);
})
console.log(recdata);

//Promise in Js 

const recedata = new Promise((resolve, reject)=>{
    
let user = false;

    if(user){
        resolve("Welcome")
    }else{
        reject("Login Failed....")
    }

});

recedata.then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>{
    console.log("It is going on...");
    
})