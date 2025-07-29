let myPromise = new Promise((resolve, reject)=>{
    let data = true;
    if(data){
        resolve("I got the data")
    }
    else{
        reject("Something Went wrong")
    }
})

async function myFun() {
   let data = await myPromise
   console.log(data);
   
}

myFun()