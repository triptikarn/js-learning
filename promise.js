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