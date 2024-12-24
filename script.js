// -------------------------------------API call using Fetch--------------------------------------------------------------//
const APICall = ()=>fetch('https://api.github.com/users/hiteshchoudhary')

APICall().then((response)=>{
   const res =  response.json()
   return res
})
.then((res)=>{
    console.log(res.login)
})
.catch((error)=>{
    console.log("Error", error)
})
//-----------------------------------------Use of Promise(Using Promise API call would get complecated so better to use FETCH()(A library))-----------------------------------------------------------//
function promise() {
    return new Promise((resolve, reject)=>{
        const error = true;
        if(error === false){
            resolve("There is data");
        }
        else {
            reject("There is no data");
            console.log("Hi")
        }
    })
}
promise()
.then((str)=>{
    console.log(str)
})
.catch((str)=>{
    console.log(str)
})

//------------------------------------------------Use of Async Await----------------------------------------//
async function name1() {
    try{
        const data = await promise();
        console.log(typeof(data));
    }
    catch(e){
        console.log("Error occured",e);
    }
}
name1()