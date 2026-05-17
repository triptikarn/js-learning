const sampleArr = [1,2,3,4];
sampleArr.custoMap = function(callback){
    let newarr = [];
    for(let i = 0; i<this.length; i++){
        let result = callback(this[i],i,this);
        newarr.push(result);
    }
    return newarr;
}
const returnNewArray = sampleArr.custoMap((val)=>{
    return val;
})
console.log(returnNewArray);
