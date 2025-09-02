//----------------Asynchronous------------------

// console.log("Start");
// setTimeout(() => {
//     console.log("This will print after 2 seconds");
// },2000 );
// console.log("End")

//--------------synchronous----------

// console.log("Hello");
// console.log("Hello2");
// console.log("Hello3");

//-----------Global Execution Context (GEC)-----------

// let x = 10;
// function greet () {
//     console.log("Hello");
// } 
// console.log(x);
// greet();

//----------call stack------------

// function multiply(a,b) {
//   return (a * b);
// }
// function square(n) {
//   return multiply(n,n);
// }
// function printSquare (x) {
//   console.log(square(x));
// }
//  printSquare(4);
 
 //----------strict-----------

//  "use strict"

//  let x = 12;
//   console.log(x)

//------------shadows------------

// let x = 20;
// function demo() {
// let x = 10;
// console.log(x);
// } demo();
// console.log(x);

//-------illegal shadowing----------

// let x =10;
// {
//     var x =10;
// }

//---------Legal shadowing--------

// let x = 20;
// {
//     let x =15;
//     console.log(x);
// }
// console.log(x);

// //      or         

// var x = 13;
// {
//     let x = 20;
//     console.log(x);
// }
// console.log(x);

//-----------Type Coercion---------

// console.log("5" + 2);
// console.log(2 + 3);
// console.log("6" - 2);
// console.log(8 - "2");
// console.log("5" * "3");
// console.log(true + 1); //------------------true becomes 1 (true =1)
// console.log(false + 2);//-------------------false becomes 0 (false =0)
// console.log(true + false);
// console.log(true +"2");
// console.log("3 " + false);
// console.log(3 - true);
// console.log(false -3);
// console.log(false * 2);
// console.log("20" + "25");
// console.log(null + 1); //-------------null=1
// console.log(3 + undefined);   
// console.log(null + true);
// console.log(null + " 23"); 
// console.log(null * 2);


//-------------Memory Leak--------------

// function leak(){
//   bigData = new Array(1000000).fill("😍");
//   console.log(bigData);
// } 
// leak();

//without Leak--------------

// function noleak(){
//   let bigData = new Array(1000000).fill("😍");
//   console.log(bigData);
// }  noleak();

//------------------------------------------

// setInterval(() => {
//   console.log("Still running...");
// }, 1000);

//------------------------------------------------------

// let id = setInterval(() => {
//   console.log("Tick Tick");
// },1000);
// setTimeout(() => {
//   clearInterval(id);
//   console.log("Stopped");
// }, 10000);

//---------------------------------------

// let timer = setTimeout(() => {
//     console.log("ONLY ONCE");
// },1000);
// clearTimeout(timer);                                          

//----------------stack overflow---------------

// function repeat (){
//             repeat();


// } repeat ();

//-----------stack underflow----------

// let stack =[]
// function stackFromPop () {
//     if(stack.length === 0) {
//         console.log("Stack underflow");
// } else {
//     stack.pop();
//     console.log("Remove one item");

// }
// }
// stackFromPop ();        

//----------------Objects--------------

// let car = {
//     brand : "Toyota",
//     model : "Corolla",
//     start : function(){
//         console.log("Car started");
//     }
// };
// console.log(car.brand +"" + car.model );
// car.start();

//---------------------Class------------------

// class Car {
//   constructor(brand,model) {
//    this.brand = brand;
//     this.model = model;
//   }
//   start() {
//     console.log(`${this.brand} ${this.model} started`);
//   }
// }
// let car1 = new Car("Toyota", "hycross");
// let car2 =new Car("Swift","suzuki");            

// car1.start();
// car2.start();

// //----------------------------------------------------------------------------------------------------------------------------

// class student {
//     constructor(name,grade) {
//         this.name = name;
//         this.grade = grade;
//     }
//     introduce() {
//         console.log(`I am ${this.name} and i am in ${this.grade}th grade.`)
//     }
// }
// let student1 = new student("Hasna",10);
// let student2 = new student("Fathima", 7);
// let student3 = new student("Farhana",6);

// student1.introduce();

// student2.introduce();

// student3.introduce();

// //--------------------------------------------------------------------------------

// class Animal {
// constructor(name,sound) {
//     name : name;
//     sound : sound;
// }
// makesound(){
// console.log(`${this.name} says ${this.sound}`)
// }
// }
// let animal1 = new Animal ("Cat", "Meow")
// let animal2 = new Animal ("Dog", "Woof")

// animal1.makesound();
// animal2.makesound();

//----------------Create instances---------------------------

// class Phone {
//     constructor(brand,model){
//        this.brand = brand;
//         this.model = model;
//     }
//   use (){
//     console.log(`${this.brand} ${this.model} is good`);
//   }
// }
// let phone1 = new Phone ("Apple", "iphone 15")       //-----------instances
// let phone2 = new Phone("Samsung", "Galaxy S23")

// phone1.use();
// phone2.use();

//----------------shallow copy------------------

// let names =["Hasna", "Wafa", "Fathima"];
// let shallowCopy = names;

// shallowCopy.push("Aysha");
// shallowCopy[1]="Sana";
// shallowCopy.splice(2,1, "Safa");

// console.log("Orginal:", names);
// console.log("Shallow copy", shallowCopy);

//--------------------------------------

// let fruits = ["Banana", "Apple", "Grape"];

// let shallowCopy = fruits;

// shallowCopy.push("Kiwi");
// shallowCopy[0] = "Mango";
// shallowCopy.splice(0,1, "Orange");

// console.log("Orginal:",fruits);
// console.log("Shallow copy", shallowCopy);


//             ❌❌❌❌
//---------using spread method

// let Animals = ["Cow", "Cat", "Dog"];
// let deepCopy = [...Animals];

// deepCopy.push("Goat");
// deepCopy[0]="Lion";
// deepCopy.pop();

// console.log("Orgnal:", Animals);
// console.log("Deep copy", deepCopy); 

//---------Using slice()

// let names = ["Fathima", "Aysha","Thahira"];
// let deepCopy = names.slice();

// deepCopy.push("Safa");
// deepCopy[2]="Marwa";

// console.log("Orginal:", names);
// console.log("Deep copy", deepCopy);

//-----------Using Array.from()

// let nums =[1, 2, 3, 4];
// let deepCopy = Array.from(nums);

// deepCopy.pop();
// console.log(nums);
// console.log(deepCopy);

//            ❌❌❌❌

//--------------deep copy-----------------

let person = {
  name :"Hasna",
  address : {
   City: "Kerala",
   Country : "India"
  }
};

let deepCopy = JSON.parse(JSON.stringify (person));

deepCopy.address.city ="Karnataka";
console.log("Orginal:" ,person.address.City);
console.log("deepCopy:" , deepCopy.address.City);

//------------Memoized-------------

//--------normal in javascript

function add (a, b){
    console.log("Calculating...");
    return a +b;
}
console.log(add(2,3));
console.log(add(2,3));



//_______________(Every time we call add(2,3), it recalculates.This is not efficient.)__________________

//---------Memoized Version--------

// function MemoizedAdd() {

//     let cache ={};
//     return function(a, b) {
//         let key = a + "," + b;
//         if (cache[key]) {
//             console.log("From cache");
//             return cache[key];
//         } else {
//             console.log("Calculating...");
//             let result = a + b;
//             cache[key]=result;
//             return result;
//         }
//     };
// }
// let add = MemoizedAdd();
// console.log(add(2,3));
// console.log(add(2,3));
// console.log(add(4,8));




//--------memoized reverse

// function memoizedReverse () {
//     let cache ={};
//     return function (str) {
//         if (cache[str]) {
//             console.log("From cache");
//         } else {
//             console.log("Reversing");
//             let reversed = str.split("").reverse().join("");
//             cache[str] = reversed;
//             return reversed;
//         }
//     };
// } 
//    let add = memoizedReverse();

// console.log(add("Helloo"));
// console.log(add("WORLD"));
// console.log(add("Hasna"));

//----------Allocation & Deallocation-------------

// function demo () {
//     let name = "Fathima";   //___memory allocates
//     console.log(name);
// } demo();

//___After demo() finishes, "Fathima" has no references → GC frees it (Deallocates)___

//----------Constructor Functions (Old Style)-----------

// function Person (name, age) {
//     this.name =name;
//     this.age = age; 

//     this.sayHi = function () {
//         console.log("Hi, i am " + this.name);
//     };
// }

// let user1 = new Person ("John",22);
// let user2 = new Person("James", 28);

// user1.sayHi();
// user2.sayHi();

//---------Classes (Modern Style)--------------

// class Person {
//     constructor(name, age){
//         this.name =name;
//         this.age = age; 
//     }
//     sayHi() {
//         console.log("Hi, i am " + this.name);
//     }
// }

// let user1 = new Person ("Ali",25);
// let user2 = new Person ("Aysha", 23);

// user1.sayHi();
// user2.sayHi();

//--------------Generator function----------------

//----for example--Normal function---

// function normalfunc() {
//     console.log("Start");
//     console.log("Middle");
//     console.log("End");
// } normalfunc();

//-----------Generator------------

//EG:-1

// function* myGenerator() {
//     yield "Hello";
//     yield "World";
//     yield "!";
// }        

// let gen = myGenerator();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


//EG:-2

// function* Generator () {
//     console.log("Start");
//     yield "Paused here";
//     console.log("Middle");
//     yield "Paused again";
//     console.log("End");
// } 
//   let gen = Generator();

//   console.log(gen.next());
//   console.log(gen.next());
//   console.log(gen.next());

//------Iterating a Generator----------

// function* numbers () {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// for(let num of numbers()) {
//     console.log(num);

// }
  
function numbers (){
  yield 1;
  yield 2;
  yield 3;
}
for ( let num of numbers()) {
  console.log(num);
}

//-----------------------------------
// function*counter (limit) {
//     for (i = 1; i <= limit; i++) {
//         yield i;
//     }
// }

// for (let num of counter(5)) {
//     console.log(num);
// }

//--------------Infinite Generators-------------------

// function*infiniteGenerator() {
//     let i = 1;
//     while (true) {
//         yield i++;
//     }
// }
 
//  let counter = infiniteGenerator();
//  console.log(counter.next().value);
//   console.log(counter.next().value);
//  console.log(counter.next().value);
//  console.log(counter.next().value);
//  console.log(counter.next().value);
//  console.log(counter.next().value);
//  console.log(counter.next().value);
//  console.log(counter.next().value);


//------------------Normal vs Curried---------------------

//---normal----

// function add (a, b) {
//     return a + b    
    
// } 
//         console.log(add(2,3));

///----curried----

// function add (a) {
//     return function (b) {
//         return a + b;
//     }
// }
//  console.log(add(2)(5));

function add(a, b) {
  return a + b;
}
add();
console.log(add(2,3));

//----Multiplication Example---

// function multiply (a) {
//     return function(b) {
//         return a * b;
//     }
// }
//  console.log(multiply(4)(5));

//----------Example 3: Three Arguments

// function sum(a){
//     return function(b){
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum(1)(2)(3));

//-----you can reuse the code
// let add10 = add(10);
// console.log(add10(9));     //❌didn't get the output
// console.log(add10(6));


//-----------------Callback-------------------

// function greet (name, callback) {
// console.log("Hello " + name);
// callback();
// }
// function sayBye (){
//     console.log("GoodBye");
// }
// greet("Hasna",sayBye);

//----------Anonymous Function as Callback---------

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }
// greet ("Hasna", function(){
//     console.log("Anonymous function");
// });

//-------------Real-World (setTimeout) callback-------------------

// setTimeout(function() {
//     console.log("Runs after two seconds");
// },2000);

//---------we can reuse

// function greet (name, callback){
//     console.log("Hello " + name);
//     callback();
// } 
// greet("Hasna" ,function() {
//   console.log("Good morning");
// });

// greet("Fathima", function(){
//     console.log("Have a nice day");
// });

// greet("Alice", function(){
//     console.log("See you tomorrow");
// });

//-------------Asynchronous Work-------------------

// setTimeout(function() {
//     console.log("This will print after 2 secs");
// }, 2000);
// console.log("This will print first");

//--------------- Creating Promises-------------------

// let promise = new Promise (function(resolve, reject) {
//     let success = false;
//     if (success) {
//       console.log("Task completed");
//     } else {
//         console.log("Something went wrong");
//     }
// });
                                                           //Handling a Promise
// promise
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// });

//---------------Example 3: Promise with setTimeout-----------------

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("Data Recieved" ), 2000);
// });
// promise.then(result => console.log(result)); 

//-----------------------------------------------------------

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("Failed"), 1000);
// });
// promise.catch(result => console.log(result));

//---------------Example 4: Chaining Promises-----------------

// let promise = new Promise(resolve => resolve(2));
// promise
// .then(num => num * 2)
// .then(num => num + 5)
// .then(result => console.log(result));

// let promise = new Promise (resolve => resolve(5));
// promise
// .then(num => num - 3)
// .then(num => num + 1)
// .then(num => num * 2)
// .then(result => console.log(result));

//----------------------------------------------------------

// function greet(){
//     return 12 ;
// }
// const result = greet();
// console.log(result);

//--------------async-await---------------

// function delay () {
//    return new Promise (resolve => setTimeout(() => resolve("Finished")),4000);
// }
// async function demo () {
//     console.log("Start");
//     let result = await delay(); 
//     console.log(result)
//     console.log("End");   
//     } demo();