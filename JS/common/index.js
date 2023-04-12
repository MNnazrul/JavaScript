

// Random number generator. vid num=10

// let x = Math.random();
// console.log(x); // random number 0 <= x < 1

// let chokka = Math.floor(Math.random()*6);
// console.log(chokka); // number 0-5


// let six = Math.floor(Math.random()*6) + 1;
// console.log(six); // print 1-6


//----------------------------------------------------------------------------
//-- template literals.

// let username = `it's my love
// it's now or never.
// i'm gonna live foreever.`;
// console.log(username);


// let a = 23, b = 13;
// let tk = `you have total ${a+b} tk`;

// console.log(tk);

//-----------------------------------------------------------



// -- tolocalestring.... currency 
// video = 30th.

//toLocaleString() = returns a string with a language 
//                                sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options


// let myNum = 123456.789;

// //myNum = myNum.toLocaleString("en-US"); // US English
// //myNum = myNum.toLocaleString("hi-IN"); // Hindi
// //myNum = myNum.toLocaleString("de-DE"); // standard German

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// //myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// //myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// //myNum = myNum.toLocaleString(undefined, {style: "percent"});
// //myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

// console.log(myNum);

//-----------------------------------------------------------


// array = think of it as a variable 
//              that can store multiple values

// let fruits = ["apple", "orange", "banana"];

// //fruits[2] = "coconut";

// //fruits.push("lemon");      //add an element
// //fruits.pop();                     //removes last element
// //fruits.unshift("mango"); //add element to beginning
// //fruits.shift();                   //removes element from beginning

// //let length = fruits.length;
// //let index = fruits.indexOf("kiwi");

// console.log(fruits);

//---------------------------------------------------------------


// let prices = [5, 10, 15, 20, 25];

// /*
// for(let i = 0; i < prices.length; i+=1){
//    console.log(prices[i]);
// }
// */

// for(let price of prices){
//    console.log(price);
// }

//---------------------------------------------------------------------------

// sorting an array of strings.

// let fruits = ['apple', 'orange', 'banana'];

// console.log(fruits);

// sortingfruits = fruits.sort();
// console.log(sortingfruits);

// reversesorting = fruits.sort().reverse();
// console.log(reversesorting);



// for (let fruit of fruits)
//    console.log(fruit);


//------------------------------------------------------------------------------------

// 2D array = An array of arrays

// let fruits =           ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions"];
// let meats =         ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[2][2] = "steak";

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }



//----------------------------------------------------------------------------------------------
// video = 37th
// spread operator = allows an iterable such as an 
// ...                             array or string to be expanded 
//                                 in places where zero or more 
//                                 arguments are expected
//                                 (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = Math.max(...numbers);
// console.log(maximum);

/*
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);
*/

//---------------------------------------------------------------------------------------------------
// 38th.
// rest parameters = represents an indefinite number
// ...                             of parameters
//                                (packs arguments into an array)

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e));

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }

//--------------------------------------------------------------------------------------------------------
// 39th
// let total = sum(4, 3);
// display(total);

// sum(3, 3, display); // first sum then display

// function sum(x, y, callBack) {
//    let result = x + y;
//    callBack(result);
// }

// function display(output) {
//    document.getElementById('video-39th').innerHTML = output;
// }

//----------------------------------------------------------------------------------------------------------------
// 40th
//array.forEach() = executes a provided callback function
//                              once for each array element

// let students = ["spongebob", "patrick", "squidward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//    array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element){
//    console.log(element);
// }

//-------------------------------------------------------------------------------------

// 41th.
//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

// let numbers = [1, 2, 3, 4];
// let squares = numbers.map(square);
// // squares.forEach(print);
// let cubes = numbers.map(cube);
// cubes.forEach(print);

// function square(element) {
//    return Math.pow(element, 2);
// }
// function cube(element) {
//    return Math.pow(element, 3);
// }
// function print(element) {
//    console.log(element);
// }

//--------------------------------------------------------------------------------
// 42th.

// let ages = [13, 18, 14, 56, 34, 23, 19];

// let adults = ages.filter(checkAge);
// adults.forEach(print);

// function checkAge(element) {
//    return element >= 18;
// }

// function print(element) {
//    console.log(element);
// }

//-----------------------------------------------------------------------------------------------
// 43th
//array.reduce() = reduces an array to a single value      

// let prices = [12, 32, 54, 66];

// let total = prices.reduce(checkOut);

// console.log(total);

// function checkOut(total, element) {
//    return total + element;
// }

//---------------------------------------------------------------------------------------

// 44th.

// let grades = [100, 45, 54, 87, 15];

// grades = grades.sort(ascendingSort);

// console.log(grades);

// function descendingSort(x, y) {
//    return y - x;
// }

// function ascendingSort(x, y) {
//    return x - y;
// }

//------------------------------------------------------------------------------------


// 45th...

// function expression = function without a name (anonymous function)
// avoid polluting the global scope with names
// write it, then forget about it

// const greeting = function() {
//    console.log("Hello!!");
// }

// greeting();

// let count = 0;
// document.getElementById('increasebutton').onclick = function() {
//    count+=1;
//    document.getElementById('mylabel').innerHTML = count;
// }
// document.getElementById('decreasebutton').onclick = function() {
//    count -= 1;
//    document.getElementById('mylabel').innerHTML = count;
// }


//-----------------------------------------------------------

// 46th

// for one parameter
// const greeting = username => console.log(`Hello ${username}`);
// greeting('Naz');

// // multiple parameter


// // const percent = function(x, y) {
// //    return x / y * 100;
// // }
// const percent = (x, y) => x/y*100;
// console.log(`${percent(85.5, 100)}%`)


//---------------------------------------------------------------

//47th..
// array suffle.

// let cards = ["A", "B", "C", "4", "2", "34", "14"];

// suffle(cards)

// // console.log(cards);
// cards.forEach(card => console.log(card))

// function suffle(array) {
//    let curId = array.length - 1;
//    while(curId >= 0) {
//       let randomId = Math.floor(Math.random() * array.length); 
//       let temp = array[curId];
//       array[curId] = array[randomId];
//       array[randomId] = temp;
//       curId--;
//    }
// }


//----------------------------------------------------------------

//48th

// nested functions = Functions inside other functions.
//  Outer functions have access to inner functions.
//  Inner functions are "hidden" from outside.
//   used in closures (future video topic)
 

// let userName = "bro";
// let userInbox = 0;
// login();

// function login() {
//    displayUserName();
//    displayUserInbox();

//    function displayUserName() {
//       console.log(`Welcome ${userName}`);
//    }
//    function displayUserInbox() {
//       console.log(`You have ${userInbox} new messages.`);
//    }
// }

//----------------------------------------------------

//49th

// closure =  A function with preserved and private data.
// Give you access to an outer function’s scope,
// from an inner function.

//-----------------------------------------------------



//50th.

// Map = object that holds key-value pairs of any data type

// const store = new Map([
//    ["t-shirt", 20],
//    ["jeans", 30],
//    ["socks", 10],
//    ["underwear", 50]
// ]);

// store.set("hat", 50);
// console.log(store.get("t-shirt"));
// store.delete("hat");
// console.log(store.has("hat"));
// console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`))


//-----------------------------------------------------------

// 51th
// object = A group of properties and methods
// properties = what an object has
// methods = what an object can do
// use . to access properties/methods

// const car = {
//    model : "Mustang",
//    color : "Red",
//    year : 2023,

//    drive : function() {
//       console.log("You Drive the car");
//    },
//    brake : function() {
//       console.log("You step on the brake");
//    }
// }

// console.log(car.model);
// console.log(car.color);
// console.log(car.year);

//-----------------------------------------

//52th

// this  = reference to a particular object 
// the object depends on the immediate context

// const car1 = {
//    model : "Mustang",
//    color : "Red",
//    year : 2023,
   
//    drive : function() {
//       console.log(`You drive ${this.model}`);
//    }
// }
// const car2 = {
//    model : "BMW",
//    drive : function() {
//       console.log(`You drive ${this.model}`);
//    }
// }

// car1.drive();
// car2.drive();

//------------------------------------------

//53th

// class = a blueprint for creating objects 
// define what properties and methods they have use
// a constructor for unique properties.


// class Player {
//    score = 0;
//    pause(){
//       console.log(`You pause the game`);
//    }
//    exit() {
//       console.log(`You exited the game`);
//    }
// }

// const player1 = new Player();
// player1.score += 1;
// console.log(player1.score);

// const player2 = new Player();
// player2.score = 5;
// console.log(player2.score);

//-------------------------------------------------
// 54th

// constructor = a special method of a class,
// accepts arguments and assigns properties

// no need to declare variable within class if you 
// use constructor.

// class student {
//    constructor(name, age, gpa) {
//       this.name = name;
//       this.age = age;
//       this.gpa = gpa;
//    }
//    study() {
//       console.log(`${this.name} is studying`);
//    }
// }

// const student1 = new student("Bob", 21, 3.5);
// console.log(student1.name);

//------------------------------------------------

// 55th

// static = belongs to the class, not the objects
// properties: useful for caches, fixed-configuration
// methods:    useful for utility functions

// class Car {
//    static numberOfCars = 0;
//    constructor(model) {
//       this.model = model;
//       Car.numberOfCars += 1;
//    }
// }

// const car1 = new Car("Lambo");
// const car2 = new Car("BMW");
// console.log(`You have ${Car.numberOfCars} cars`);

// const car3 = new Car("Ferrari")

// console.log(`You have ${Car.numberOfCars} cars`);


//--------------------------------------------------

// 56th

// inheritance = a child class can inherit all the 
// methods and properties from another class

// class Animal{
//    alive = true;
//    eat(){
//        console.log(`This ${this.name} is eating`);
//    }
//    sleep(){
//        console.log(`This ${this.name} is sleeping`);
//    }
// }

// class Rabbit extends Animal{
//    name = "rabbit";
//    run(){
//        console.log(`This ${this.name} is running`);
//    }
// }
// class Fish extends Animal{
//    name = "fish";
//    swim(){
//        console.log(`This ${this.name} is swimming`);
//    }
// }
// class Hawk extends Animal{
//    name = "hawk";
//    fly(){
//        console.log(`This ${this.name} is flying`);
//    }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();


//--------------------------------------------------------

// 57th

// super = Refers to the parent class. 
// Commonly used to invoke constructor of a parent class

// class Animal{
//    constructor(name, age){
//        this.name = name;
//        this.age = age;
//    }
// }
// class Rabbit extends Animal{
//    constructor(name, age, runSpeed){
//        super(name, age);
//        this.runSpeed = runSpeed;
//    }
// }
// class Fish extends Animal{
//    constructor(name, age, swimSpeed){
//        super(name, age);
//        this.swimSpeed = swimSpeed;
//    }
// }
// class Hawk extends Animal{
//    constructor(name, age, flySpeed){
//        super(name, age);
//        this.flySpeed = flySpeed;
//    }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 80);
// const hawk = new Hawk("hawk", 3, 200);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

//------------------------------------------------------

//58th..

// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

// class Car{
//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);

// car.gas = 100;

// console.log(car.power);
// console.log(car.gas);
//-------------------------------------------------

//59th..
// objects as arguments..


// class Car {
//    constructor(model, year, color) {
//       this.model = model;
//       this.year = year;
//       this.color = color;
//    }
// }

// const car1 = new Car("BMW", 2021, "red");
// const car2 = new Car("Lambo", 2022, "white");

// changeColor(car2, "blue");

// displayInfo(car2);

// function displayInfo(car) {
//    console.log(car.model);
//    console.log(car.year);
//    console.log(car.color);
// }

// function changeColor(car, clr) {
//    car.color = clr;
// }

//--------------------------------------------

// 60th.

// array of a objects.

// class Car {
//    constructor(model, year, color) {
//       this.model = model;
//       this.year = year;
//       this.color = color;
//    }
//    drive() {
//       console.log(`You are driving ${this.model}`);
//    }
// }

// const car1 = new Car("BMW", 2021, "red");
// const car2 = new Car("Lambo", 2022, "white");
// const car3 = new Car("Mustang", 2023, "green");

// const cars = [car1, car2, car3];
// console.log(cars[0].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

//--------------------------------------------

// 61th.
// anonymous objects = sobjects without a name
//                   not directly referenced.
//  less syntax. No need for unique names.

// class Card {
//    constructor(value, suit) {
//       this.value = value;
//       this.suit = suit;
//    }
// }

// let card1 = new Card("A", "Hears");
// let card2 = new Card("A", "Spades");

// let cards = [new Card("A", "Diamond")];
// console.log(cards[0].value);

//---------------------------------------------

//62th.

// error = object with a description of 
// something went wrong.
// throw = executes a user defined error.

// try {
//    let x = window.prompt("Enter a number");
//    x = Number(x);
//    if(isNaN(x)) throw "That wasn't a number";
//    if(x == "") throw "That was empty!";
//    console.log(`${x} is a number`);
// }
// catch(error) {
//    console.log(error);
// }
// finally {
//    console.log("This always executes");
// }

//------------------------------------------------

// 63th..

// setTimeout() = invokes a function after a number of milliseconds            
// asynchronous function (doesn't pause execution) 

// let timer1 = setTimeout(firstMessage, 3000);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// clearTimeout(timer1);

// function firstMessage() {
//    alert(`Buy this course for free`);
// }
// function secondMessage() {
//    alert("This is not a scam");
// }
// function thirdMessage() {
//    alert("DO IT NOW");
// }

//----------------------------------------------------

// 64th.

// setInterval() = invokes a function 
//          repeatedly after no. of milliseconds
// asynchronous function (doesn't pause execution)

// let count = 0;
// let max = window.prompt("Count up to what #");
// max = Number(max);

// const timer = setInterval(countUP, 1000);
// function countUP() {
//    count += 1;
//    console.log(count);
//    if(count == max) {
//       clearInterval(timer);
//    }
// }

//--------------------------------------------------

// 65th, 66th.

// The Date object is used to work with dates & time.

// date = date.toLocaleString();

// const label = document.getElementById("65th");
// setInterval(update, 1000);
// function update() {
//    let date = new Date();
//    date = date.toLocaleString();
//    label.innerHTML = date;
// }

//--------------------------------------------------




