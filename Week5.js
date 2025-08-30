//----------------Asynchronous------------------

// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 2000);
// console.log("Third");

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

//  console.log(x);
//  let x = 12;

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

//      or


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

// setInterval(() => {
//   console.log("Still running...");
// }, 1000);

// let id = setInterval(() => {
//   console.log("Tick Tick");
// },1000);
// setTimeout(() => {
//   clearInterval(id);
//   console.log("Stopped");
// }, 10000);


// let timer = setTimeout(() => {
//     console.log("ONLY ONCE");
// },1000);
// clearTimeout(timer);                                          

//----------------stack overflow---------------

// function repeat (){
//             repeat();


// } greet ();

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

// let fruits = ["Banana", "Apple", "Grape"];

// let shallowCopy = fruits;

// shallowCopy.push("Kiwi");
// shallowCopy[0] = "Mango";
// shallowCopy.splice(0,1, "Orange");

// console.log("Orginal:",fruits);
// console.log("Shallow copy", shallowCopy);


//---------------------------------------------
// let names =["Hasna", "Wafa", "Fathima"];
// let shallowCopy = names;

// shallowCopy.push("Aysha");
// shallowCopy[1]="Sana";
// shallowCopy.splice(2,1, "Safa");

// console.log("Orginal:", names);
// console.log("Shallow copy", shallowCopy);

//--------------deep copy-----------------
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

//------------Memoized-------------

//--------normal in javascript
// function add (a, b){
//     console.log("Calculating...");
//     return a +b;
// }
// console.log(add(2,3));
// console.log(add(2,3));
//_______________(Every time we call add(2,3), it recalculates.This is not efficient.)_______________________

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

function* myGenerator() {
    yield "Hello";
    yield "World";
    yield "!";
}        

let gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());