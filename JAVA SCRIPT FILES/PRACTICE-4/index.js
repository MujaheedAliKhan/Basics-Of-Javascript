// let a = 10;
// let b = 20;

// console.log("a =" , a, "& b = ",b);
// console.log("a-- =",a--);
// console.log("a =" , a);


// let num = prompt("enter a number:");

// if (num % 5 === 0){
//     console.log(num,"is a multiple of 5");
// }
// else {
//     console.log(num,"is not a multiple of 5");
// }

// let marks = prompt("Enter a Marks:");

// if (marks >= 90 && marks <= 100){
//     console.log("A Grade marks");
// }

// else if (marks >= 75 && marks <= 89){
//     console.log("B Grade marks");
// }
// else if (marks >= 60 && marks <= 69){
//     console.log("C Grade marks");
// }

// else if (marks >= 50 && marks <= 59){
//     console.log("D Grade marks");
// }
// else if (marks >= 0 && marks <= 49){
//     console.log("Student is Fail");
// }


// printing all even and add number in this program
// for (let num = 0; num <=100; num++){
//     if(num % 2 !== 0) {
//         console.log("num =" ,num);
//     }
   
// }

// number guessing game
// let gamenum = 5;

// let usernum = prompt("Guess the number:");

// while (usernum != gamenum){
//     usernum = prompt("wrong number guess again:");
// }

// alert("congratulation you won");


// strings
// let str = "Mujaheed";
//     console.log(str[5]);


// Template Literals
// let spestr = "Mujaheed";
// console.log(spestr);
//     -------------
// let obj = {
//     veg1: "brinjal",
//      veg2: "leaf",
// };                                            //this process is called "string interpolation".

// console.log(`veg1 = ${obj.veg1}`);


// Escape characters

// console.log("\t Mujaheed Ali \n Khan is a good boy");

// 1. \n - it starts with new line.
// 2. \t - it makes tab space.

// string methods in JS

// str.toLowerCase()

// let str = "Mujaheed";
// let newstr = str.toLowerCase();
// console.log(str);

// console.log(newstr);

// //str.toupperCase()

// let str = "Mujaheed";
// let newstr = str.toUpperCase();
// console.log(str);

// console.log(newstr);


// str.trim()

// let str = "        Mujaheed Ali Khan     ";
// console.log(str.trim());


// str.slice(start,end?) return part of a string

// let str = "Mujaheed";
// console.log(str.slice(0,4));

// str1.concat(str2)

// let str1 = "Mujaheed";
//  let str2 = " Ali Khan";
// let result = str1.concat(str2);
// console.log(result);


// str.replace(searchVal, newval)

// let str = "Mujaheed";
// console.log(str.replace("Muja", "Mujaaaa")); 


// str.charAt()

// let str = "Hockey Player";
// console.log(str.charAt(5));// it writtens the character index.

// creating a id with the help of strings
// let name = prompt("Enter a FullName:");

// let username = "@" + name + name.length;
// console.log(username); 

// let arr = ["Mujaheed" , "Mansoor" , "Mudasir"];
//  console.log("arr = ", arr.length);
//  let i = arr;
//  for (i=0;i<=2;i++){
//     console.log(arr);
//     arr++;
//  }

// Practice-1

// let itm = [1000, 200, 2333, 466];



// for (let i = 0; i < itm.length; i++){
//     let offer = itm[i] /10;
//     itm[i] -= offer;
    
// console.log(`Value of iteam after offer = ${itm[i]}`);
// }

// push()
// let age = [12, 20, 21, 22, 22]; 
//     console.log(age);
//     let deletedage = age.pop();
//     console.log(age);
//     console.log("deletedage = ", deletedage);
    
// toString()
// let items = ["Mujju", "Munna" , "Anjum"];
// console.log(items.toString());


// concat()

// let arr1 = ["mango", "Guava" , "Apple", "Anaar"];
// let arr2 = ["pine apple", "Banana"];
// let arr = arr1.concat(arr2);
// console.log(arr);

// unshift()
// let arr1 = ["mango", "Guava" , "Apple", "Anaar"];
// let demo = arr1.unshift("Mujju");
// console.log(demo);

// //shift()
// let arr1 = ["mango", "Guava" , "Apple", "Anaar"];
// let demo = arr1.shift();
// console.log("deleted arr =" ,demo);

// slice() in array
// let vehicle = ["Ninja", "Honda", "BMW", "Passion"];
// console.log(vehicle);

// console.log(vehicle.slice(0, 3));

// //splice()
// let vehicle = [10, 20, 30, 40, 50];
// vehicle.splice(1, 2, 15, 25);

// //add element
// vehicle.splice(1, 0 , 15 );

// //Delete element
// vehicle.splice(2 , 1);

// vehicle.splice(1, 1, 25);
// console.log(vehicle);

// Practice Question

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// arr.shift();
// arr.splice(2, 1, "OLA");
// arr.push("amazon");
// console.log(arr);

// function call and function definition

// function myName(){
//     console.log("Mujaheed");
// }

// myName();

// function sum(num1, num2){ //parameter
//     sum = num1 + num2;
   
   
//      return sum;
// }

// sum(10, 10); //arguement
// console.log(sum);   


// arrow function

// let Age = (a, b) => {
//     c =  a + b;
//     return c;
// }
// console.log (Age(5, 5));

// function countvowels(str){
//     let count = 0;
//     for (let char of str){
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//                 count++;
//         }
//     }
//     console.log(count);
// }

// let countvowels = (str) => {   //we have to give a string value
//     let count = 0;
//     for (let char of str){
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//                 count++;
//         }
//     }
//     console.log(count);
// } 
 

// forEach loop in arrays

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//     console.log(val);
// });

// Practice Question

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//     console.log(val**2 );  //it means 2^2 = 4;
// })

// let arr = [1, 2, 3, 4, 25];

// let squares = (val) => {
//     console.log(val**2 );  //it means 2^2 = 4;   //this is another method
// }
// arr.forEach(squares);

// important arrays that are used in js (arr.map function)
// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((val) => {
//     return val*2;
// });

// console.log(newArr);

// arr.filter function
// let arr = [1, 2, 3, 4, 5, 6];

// let newArr = arr.filter((val) => {
//     return val % 2 !== 0;
// });

// console.log(newArr);

// arr.reduce function

// let arr = [1, 2, 3, 4];

// const output = arr.reduce ((res, curr) => {
//     return res * curr;
// });

// console.log("output = " ,output);

// let h3 = document.querySelector("h3");


// h3.innerText = h3.innerText + "Your looking good";

// console.dir(h3.innerText);

// let box = document.querySelectorAll(".box");
// // box[0].innerText = "Class-1";
// // box[1].innerText = "Class-2";
// // box[2].innerText = "Class-3";

// ind = 0;

// for(div of box){
//     div.innerText = `Unique value ${ind}`
//     ind++;
// }

// const name = ["Mansoor", "Mujaheed", "Mudasir"];
// for (let i=0; i<=name; i++){
//     console.log(name);
//     name++;
// }

// let arr = ["Mujaheed" , "Mansoor" , "Mudasir"];
//  console.log("arr = ", arr.length);
//  let i = arr;
//  for (i=0;i<=2;i++){
//     console.log(arr);
//     arr++;
//  }



// for (let i = 1; i <= 10 ; i++){
//     console.log(i);
// }

// console.log(hoist)
// var testname = "farooq";

// function hoist() {
// console.log(testname)
// if(true){
// var testname = "arshad";
// }
// debugger;
// console.log(testname)
// }



// let newbtn = document.createElement("button");
// newbtn.innerText = "click Me";

// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";

// document.querySelector("body").prepend(newbtn);


// let para = document.querySelector("p");

// para.classList.remove("newclass");
 
// to remove the node
// let para = document.querySelector("p");

// para.remove();

// let button = document.querySelector("#btn1");

// button.onclick = (e) =>{                                //this is called event handling in js by using arrow function.
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// let heading = document.querySelector("h1");
// console.log(heading);
// heading.style.color = "grey";
   





// let button = document.querySelector("#btn");

// const btn = ("click", () => {
//     console.log("this is a click button 1");
// });

// button.addEventListener("click", btn);
    
// button.addEventListener("click", () => {                  //syntax of handling a addEventListener
//     console.log("this is a click button 2");
// });

// button.addEventListener("click", () => {
//     console.log("this is a click button 3");
// });

// button.removeEventListener("click", btn);    //this is syntax of removing function






// let togglebtn = document.querySelector("#mode");

// let mode = "dark"; 

// let body = document.querySelector("body");

// togglebtn.addEventListener("click", ()=> {
//     if (mode === "dark"){
//         mode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     else{
//         mode = "dark";                       //toggle means switching color to color and mode to mode
//         body.classList.add("dark");
        
//         body.classList.remove("light");
//     }
//     console.log(mode);
// });

// const studentinfo = {
//     FullName : "Mujaheed",
//     Marks: 20,
//     printFullName: function () {
//         console.log("fullname =", this.FullName);  //"this" = mentioning particular object
//     },
// }


// const employee = {
//     salary() {
//         console.log("50000 is my salary")
//     },
// };
//                                     //setting prototype 
// const employee1 = {
//     salary: 200000,
//     salary() {
//         console.log("500 is my salary")
//     },
// }

// employee1.__proto__ = employee;

// class carcompany{
//     start(){
//         console.log("start the car");
//     }

//     stop(){
//         console.log("stop the car");
//     }

//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new carcompany();
// fortuner.setBrand = "fortuner";
// let indigo = new carcompany();
// indigo.setBrand = "fortuner";


// class carcompany{
//     constructor(brand, milage){ //passing arguments
//         console.log("creating new object");
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("start the car");
//     }

//     stop(){
//         console.log("stop the car");
//     }

   
// }

// let fortuner = new carcompany("fortuner", 10);//here declaring the values of argument
// let indigo = new carcompany();


//               inheriting the parent to child 
                                        

// class engineer extends person{
//     work(){
//         console.log("problem solving")
//     }
// }

// let MujaheedObj = new engineer();
// let species = new person();class person{
//     constructor(){
//         this.species = "indian spicies";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }                        

// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     eat(){
//         console.log("eat");
//     }
// }
//                                      //how to use super keyword while inheritance
// class child extends Person{
//     constructor(){
//         super(name);
//     }

//     work(){
//         super.eat();
//         console.log("working");
//     }
// }
// let PersonObj = new Person("Mujaheed");
// let childObj = new child();

// let Data = "Personal Data";
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewdata(){
//         console.log("data = ", Data);
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email)
//     }
//     editdata(){
//         Data = "Office data";
//     }
// }

// let Student1 = new User("Mujaheed", "lavanimujaheed@gmail.com");
// let Student2 = new User("Mujju", "lavanimujaheed@gmail.com");

// let AdminObj = new Admin("mudasir", "mudasir@gmal.lcom");


// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 3000);

// //callback function example
// function sum(a, b){
//     console.log(a+b);

// }
// function cal(a, b, sumCallback){
//     sumCallback(a, b);
// }

// cal(1, 2, sum);