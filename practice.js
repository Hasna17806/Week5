let promise = new Promise((resolve, reject) =>{
    let success = true;

    if (success) {
        resolve("Passed");
    } else {
        reject("Failed");
    }

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));