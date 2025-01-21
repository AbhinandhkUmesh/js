const prompt = require('prompt-sync')();
//===1===
// function fruit(){
//     var name="apple";
//     let price=20;
//     console.log(name);
//     console.log(price);
// }
// fruit();

//===2===
// for(let i=0;i<3;i++){
//     setTimeout(()=> console.log(i), 1);
// }

//===3===
// console.warn(+true);
// console.warn(typeof +true);

// ===4===
// console.warn("anil");
// console.warn(typeof("anil"));


// ===5===
// let data = "size";
// const bird ={
//     size:"small",
// };
// console.warn(bird[data]);
// console.warn(bird["size"]);
// console.warn(bird.size);
// console.warn(bird.data);

// ===6===
// let c ={name :"peter"};
// let d;

// d=c;
// c.name = "anil";
// console.log(d.name);

// ===7===

// var x;
// let x=10;
// console.log(x);

// ===8===
// let a = 3;
// let b = new Number(3);

// console.log(a == b);
// console.log(a === b);

// ===9===
// let name;
// nae ={};//typo
// console.log(name); //undefined

// ===9===
// function fruit(){
//     console.log("Woof");
// }

// fruit.name = "apple";

// console.warn(fruit())


// ===10===
// function sum(a,b){
//     return a+b;
// }

// console.warn(sum(1,2));

// ===11===
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);


// 12
// function getAge(...args){
//     console.log(typeof args);
// }

// getAge(5);

// 13
// function getAge(){
//     'use strict';
//     var age= 21;
//     console.log(age);
// }
// getAge();

// 14
// const sum = eval(10*10+5);
// console.log(sum);

// 15
// sessionStorage.setItem('cool_secret',123);                                            


// 16
// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((acc,curr) => acc + curr, 0);
// console.log("Sum of all elements "+sum);

//17
// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((acc,curr) => acc + curr, 0);
// let average = sum/ numbers.length;
// console.log(`Average is ${average}`);

// 18
// let number = [3,1,5,2,4];
// number.sort((a,b) => a-b);
// let secondLargest = number[1];
// console.log(secondLargest);

// 19
// let numbers = [1,2,2,3,4,4,5];
// let uniqueNumber = [...new Set(numbers)];
// console.log(uniqueNumber);

// 20
// let numbers = [1,2,3,4,5];
// let searchElement = 3;
// let found = numbers.includes(searchElement);
// console.log("Array contains "+searchElement + ": "+found);

// 21
// function fetchData(callback){
//     setTimeout(function(){
//         callback("Data received");
//     },2000);
// }

// function proccessData(data){
//     console.log(data);
// }

// fetchData(proccessData);

// 22
// function fetchData(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function() {
//             resolve("Data Received");
//         }, 2000);
//     }); 
// }

// fetchData()
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(error){
//         console.error(error);
//     });

// 23
// function fetchData(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function() {
//             resolve("Data Received");
//         }, 2000);
//     }); 
// }

// async function fetchDataAsync(){
//     try{
//         let data = await fetchData();
//         console.log(data);
//     }catch (error){
//         console.error(error);
//     }
// }
// fetchDataAsync();

// 24
// let numbers=[1,2,3,4,5];
// numbers.pop();
// console.log(numbers);

// 25
// let numbers=[1,2,3,4,5];
// let removedElement = numbers.shift();
// console.log(numbers);

// 26
// let numbers=[1,2,3,4,5];
// numbers.unshift(9,0);
// console.log(numbers);


// 27
// let numbers1=[1,2,3,4,5];
// let numbers2=[1,2,3,4,5];
// let combine = numbers1.concat(numbers2);
// console.log(combine);

// 28
// let numbers = [1,2,3,4,5];
// let slicedArray = numbers.slice(1,4);
// console.log(slicedArray);

// 29
// let numbers = [1,2,3,4,5];
// numbers.splice(2,2,'a','b');
// console.log(numbers);

// 30
// let numbers = [1,2,3,4,5];
// let num = numbers.forEach(num => {
//     console.log(num);
// });

//31
// let numbers = [1,2,3]
// let squaredNumbers = numbers.map(num =>{
//     return num * num;
// })
// console.log(squaredNumbers);

// 32
// let number = [1,2,3,4,5]
// let evenNumber = number.filter(num => {
//     return num % 2 === 0;
// })
// console.log(evenNumber);

// 33
// let number = [1,2,3,4,5];
// let sum = number.reduce((acc,curr) => {
//     return acc + curr;
// })
// console.log(sum);    

// 34
// const fetchData = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const data = 'Data from server';
//         resolve(data);
//     },2000);
// })

// fetchData
// .then(data => {
//     console.log('Success',data)
// })
// .catch(error =>{
//     console.log('Error', error);
// })

// 35
// function processUserData(username,callback){
//     console.log(`Fetching data for user: ${username}`);

//     setTimeout(() => {
//         const userData = {
//             username: username,
//             email : `${username}@example.com`
//         }
//         callback(userData);
//     },2000);
// }
// function displayUserData(user){
//     console.log(`Username: ${user.username} ,Email :${user.email}` );
// }

// processUserData("Abhi",displayUserData);



// 36
// let numbers =[1,2,3,4,5];
// let sum = numbers.reduce((acc,curr) => {
//     return acc+curr;
// })
// console.log(sum);

// 37
// function reverseArray(arr){
//     return numbers.reverse();
// }
// let numbers = [1,2,3,4,5];
// console.log(reverseArray());

// 38
// let numbers = [1, 2, 3, 4, 4, 5];
// let dupli = [...new Set(numbers)];
// console.log(dupli);

// const message = "hello";
// for(const char of message){
//     console.log(message);
// }

// const person = {
//     name:"John Doe",
//     age :30,
//     city:'wonderland'
// };
// for (let key in person){
//     console.log(`${key}:${person[key]}`);
// }


// Hoisting
// for..in and for..of
// map
// Insert one element to a specific position in an array
// Asynchronous function
// Callback function
// Promise 
// Event loop
// Async and sync 
// Js Basic property 
// Function 
// Filter 
// Promise 
// Scope of Variable 
// Array , Object
// Shallow and deep copy

// function fetchData(callback){
//     setTimeout(() => {
//         const data = 'Fetched data';
//         callback(data);
//     }, 1000);
// }

// fetchData(result => {
//     console.log(result);
// })

// function fetchData(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             const data = 'Fetched Data';
//             resolve(data);
//         },1000);
//     })
// }

// fetchData()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     })

// function fetchData(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             const success = false ;
//             if(success){
//                 const data = {
//                     id :1,
//                     name: "Example Data"
//                 };
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Failed to fetch"));
//             }
//         }, 1500);
//     });
// }

// fetchData()
//     .then(result => {
//         console.log("Fetched data from API: ",result);
//     })
//     .catch(error => {
//         console.error("Error ",error.message);
//     })


// let numbers = [1,2,3,4,5,6];
// let small = Math.min(...numbers);
// console.log(small);

// function fetchdata(callback){
//     setTimeout(() => {
//         let data = "hello";
//         callback(data)
//     },1000)
// }

// fetchdata(result => {
//     console.log(result)
// })


// function fetchdata(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let API =false; 
//             if(API){
//                 let data = {
//                     name: "Abhi",
//                     id : 123
//                 }
//                 resolve(data);
//             }
//             else{
//                 let data = "Error"
//                 reject(data);
//             }
//         },1000);
//     })
// }
// fetchdata()
//     .then(result => {
//         console.log("Result is : ",result)
//     })
//     .catch(error => {
//         console.log("Erroorroror",error)
//     }) 


// async function fetchData(){
//     return await new Promise((resolve,reject) => {
       
//             let api = true ;
//             if(api){
//                 let data = {
//                     name : "Abhi",
//                     id: 123
//                 }
//                 resolve(data);
//             }else{
//                 let data = "EMpty"
//                 reject(data);
//             }
            
//     })
// }

// fetchData()
//     .then(result => {
//         console.log("Data :",result)
//     })
//     .catch(error => {
//         console.log("Error: ",error)
//     })


// function largest(num1,num2,num3){
//     return Math.max(num1,num2,num3);
// }

// const num1 = 5 ;
// const num2 = 6;
// const num3 = 7;

// const largestnum = largest(num1,num2,num3);
// console.log(largestnum);

// function evenNum(){
//     let evenNumbers = 0;
//     while (true){
//         yield  evenNumbers;
//         evenNumbers +=2;
//     }
// }

// const generator = evenNum();

// for(let i = 0;i < 5;i++){
//     console.log(generator.next().value);
// }


// let numbers = [ "apple", "banana", "orange", "kiwi", "grapefruit"];

// let largestelement = numbers.reduce((largest , currentElement) => {
//     if(currentElement.length > largest.length){
//         return currentElement;
//     }else{
//         return largest;
//     }
// })

// console.log(largestelement);

// let numbers = [1,2,3,4,5];
// let firstNumber = numbers.shift();
// console.log(firstNumber);

// let numbers = [1,2,3,4,5];
// let number2 = [1,2,3,4,5];
// let combineNum = numbers.concat(number2);
// console.log(combineNum)


// let numbers = [1,2,3,4,5];
// let slcieNumber = numbers.splice(0,0,6)
// console.log(slcieNumber);
// console.log(numbers);

// let numbers = [1,2,3,4,5];
// numbers.forEach(num => console.log(num*2));

// let promise = new Promise((resolve,reject) => {
//     const success=false;

//     if(success){
//         let data ="hello";
//         resolve(data);
//     }
//     else{
//         let data = "Error";
//         reject(data);
//     }
// })

// promise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// let numbers = [1,3,4,5,6,2];
// let even = numbers.filter(num => num % 2 === 0)
// console.log(even);

// function outer(){
//     let data = "hello"
//     function inner(){
//         console.log(data);
//     }
//     return inner()
// }
// outer()


// function demo(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let data ="hello";
//             resolve(data)
//         },1000)
//     })
// }

// demo()
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })
