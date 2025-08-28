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

class Phone {
    constructor(brand,model){
       this.brand = brand;
        this.model = model;
    }
  use (){
    console.log(`${this.brand} ${this.model} is good`);
  }
}
let phone1 = new Phone ("Apple", "iphone 15")
let phone2 = new Phone("Samsung", "Galaxy S23")

phone1.use();
phone2.use();