// let promise = new Promise((resolve, reject) =>{
//     let success = true;

//     if (success) {
//         resolve("Passed");
//     } else {
//         reject("Failed");
//     }

// });

// promise
// .then(result => console.log(result))
// .catch(error => console.log(error));

// console.log("Start");
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Error: something went wrong");
//     },2000);
// });

// promise
// .then(result => console.log(result))
// .catch(error => console.log(error));

// console.log("End");

//------------------------------------------------------
// console.log("start");
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data Received");
//     }, 1000);
// });

// promise
// .then(result => console.log(result))
// .catch(error => console.log(error));

// console.log("End");

//------------------------------------------------------

// "Use strict"
// function sum (a, a , b) {
//     return a + b ;
// } 

//--------------------------------------------------------

// console.log(x);
// var x = 10;

//-----------------------------------------------------

// try {
//     let num = 10; 
//     console.log(num.toLowerCase());
// } catch (err) {
//     console.log("something went wrong" , err.message);
// } 

// console.log ("Still running");


//---------------------------------------------------

// try {
//     throw new Error ("Oops!"); 
// } catch (err) {
//     console.log("Error Caught:" , err.message);
// } finally {
//     console.log("This will always runs");
// }

//------------------------------
// var a = 10;
// {
//     let a = 11;
//     console.log(a);
// } 

// console.log(a);

function greet () {
    data = "I am leak";
} greet();