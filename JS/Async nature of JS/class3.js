let myPromise = new Promise((resolve, reject)=>{
   setTimeout(()=>{
     let data = true // this data will come from an api
    if (data) {
        resolve("Yeahhh I got the data")
    }
    else{
        reject("Something Went Wrong")
    }
   }, 5000)
})

// Jab data ko any mai time lgta ho to wo promise krta hy
// kh mai awonga

// Jab b apko kahi promise diya jaye
// to uspy .then.catch lagana

myPromise.then((data)=>{
    console.log("this is then ", data)
}).catch((error)=>{
    console.log("This is catch", error);
    
})