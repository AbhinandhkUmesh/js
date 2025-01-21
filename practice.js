// ====Reverse a string====

// function reverseString(str){
//    var reversed = '';
//    for(var i = str.length-1;i>=0;i--){
//       reversed += str[i]
//    }
//    return reversed
// }

// console.log(reverseString('hello'))


// ---------------------------------------------------------------------


//======= Palidrome Check ==========

// function isPalindrome(str) {
//    var reversedStr = '';
//    for(var i = str.length - 1;i>=0;i--){
//       reversedStr += str[i];
//    }
//   return str === reversedStr
// }

// console.log(isPalindrome("level"))

// -----------------------------------------------------------------------

// ===== Count Vowels =====

// function countVowels(str){
//    var count = 0
//    var vowels = "aeiou";
//    for(var i = 0;i<=str.length;i++){
//       if(vowels.indexOf(str[i].toLowerCase()) !== -1){
//          count++;
//       }
//    }
//    return count;
// }

// console.log(countVowels("programming"));




// === Non-curried function====
// function add(a,b,c){
//    return a+b+c;
// }

// console.log(add(1,2,3));


// Curried version of the function

// function curryAdd(a){
//    return function(b){
//       return function(c){
//          return a+b+c;
//       }
//    }
// }

// console.log(curryAdd(2)(3)(4))
// ---------------------------------------------------

// =========== Promise =============

// const mPromise = new Promise((res,rej) => {
//    setTimeout(() => {
//       const success = true;
//       if(success){
//          res("Operation completed SuccessFully")
//       }
//       else {
//          reject("operaion failed")
//       }
//    },2000)
// })

// mPromise 
//    .then((result) => {
//       console.log("success : ",result)
//    })
//    .catch((error) => {
//       console.error("Error",error)
//    })
// -----------------------------------------------------

// Promise success in 2min and 3min after reject

// const customPromise = new Promise((res,rej) => {
//    const success = setTimeout(() => {
//       clearTimeout(failure)
//       res("Success")
//    },2000);

//    const failure = setTimeout(() => {
//       clearTimeout(success)
//       rej("failed")
//    },3000)
// })

// customPromise
//    .then((result) => {
//       console.log("Success: ",result)
//    })
//    .catch((error) => {
//       console.error('Error: ',error)
//    })
// ----------------------------------------

//========== Generator========
// function* simpleGen() {
//    console.log("Start")
//    yield 1;
//    console.log("after first yeild")
//    yield 2;
//    console.log("afer 2nd yield")
//    return 3
// }

// const generator = simpleGen()

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// ------------------------------------------



// function greet(name){
//     console.log(`hellooo ${name}`)
// }
// // greet.apply(null,['Bob','hii'])
// greet.call(null,'abhi')

// function dosomething(callback){
//     console.log("hello")
//     callback()
// }

// function callbackfun(){
//     console.log("callback")
// }

// dosomething(callbackfun)


// let promise = new Promise((res,rej) => {
//     setTimeout(() => {
//         let value = false
//         if(value == true){
//             res("promise resolved")
//         }else{
//             rej("rejected")
//         }

//     },2000)
// })

// promise
//     .then(result =>{
//         console.log("resolved",result)
//     })
//     .catch(err => {
//         console.log("errr",err)
//     })


// let obj = {name:"abhi",age:20}

// let {name,age} = obj

// console.log(name)


// const express = require('express')

// const app = express()

// app.get('/',(req,res) => {
//     res.send("hello")
// })

// app.get('/user/:id',(req,res) => {
//     res.send(`user Id : ${req.params.id}`)
// })

// app.listen(4000, () => {
//     console.log("started")
// })

// const fs = require('fs')
// fs.writeFile('app.js',"hello",(err) => {
//     if(err){
//         console.log('error',err)
//     }else{
//         console.log("file written",)
//     }
// })


// const arr =[1,2,3,4,5,6,7,3,4,5]
// const uni = []

// for(let i = 0 ;i<arr.length;i++){
//     if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
//         uni.push(arr[i])
//     }
// }
// console.log(uni)

// const express = require('express')
// const app = express()

// app.use((req,res,next) => {
//     console.log('11')
//     next()
// })
// app.get('/user/:id',(req,res) => {
//     const userId = req.params.id
//     res.send(`User ID: ${userId}`)
// })
// app.listen(4000,() => {
//     console.log("started")
// })


// function aynfunction(callback){
//     setTimeout(() => {
//         console.log('hello')
//         callback()
//     },2000)
// }

// function sample(){
//     console.log("callback")
// }

// aynfunction(sample)

// async function sample(){
//     try {
//         const res = await 
//     }
// } 

// let arr= ['hello','hi','wooeeew']

// let large = arr.reduce((acc,crr) => {
//     if(acc.length<=crr.length){
//         acc = crr
//     }
//     return acc
// })
// console.log(large)




//==============================================
// const arr = [5, 4, 2, 1]
// let a=[]

// for(let i=1;i<10;i++){
//     if(arr.includes(i)){

//     }else{
//         a.push(i)
//     }
// }
// console.log(a);

// 

// arr.sort()
// for(let i=1;i<10;i++){
//    if(arr[i+1]!=arr[i]+1){
//     a.push(i+1)
//    }
// }
// console.log(a);

//===============================================

// let i = 10
// setTimeout(function() {
//   console.log(i);
//   i = 5
// }, 1000);

// setTimeout(function() {
//   console.log(i);
// }, 1200);

// i = 200

// ==============================================


// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(mssg){
//     console.log(mssg)
// });

// myEmitter.emit('someEvent','the event was emitted')

// =================================================

// var events = require('events')
// var util = require('util')

// var Person = function(name){
//     this.name = name;
// }

// util.inherits(Person,events.EventEmitter);

// var james = new Person('James');
// var marry = new Person('mary');
// var ryu = new Person('ryu')
// var people = [james,marry,ryu]

// people.forEach(function(person){
//     person.on('speak',function(mssg){
//         console.log(person.name + ' said: ' + mssg)
//     })
// })

// james.emit('speak','hey dudes')

// -------------------------------------------------------------


// =========FS=====================

// const fs = require('fs')

// const readMe = fs.readFileSync('app.js','utf8');
// fs.writeFileSync('Write.js',readMe);

// console.log(readMe)
// ====================================================
// const obj = {key: 'value',anotherKey:'anotherValue'};

// console.log(obj)
// delete obj.key
// console.log(obj)
// -------------------------------------------

// ========remove nth element from array===================

// const arr = [1,2,3,4,5,6]
// arr.splice(5,1)

// console.log(arr)

//===============Js=============================

// ==============hoisting===============
// getName()
// console.log(x)
// var x = 7
// function getName(){
//     console.log('hello')
// }
// getName()
// console.log(x)


//     var a = 10
//     let b = 20
//     const c = 30 

// console.log(a)
// console.log(b)
// console.log(c)

// let b = 100
// {
//     let b = 10
//     console.log(b)
// }
// console.log(b)


// setTimeout(() => {
//     console.log("1 st")
// },1000)


// function x(y){
//     console.log(x)
//     y()
// }

// x(function y(){
//     console.log('y')
// })

//============== Event Listener=============

// function attachEventListener(){
//     let count = 0;
//     document.getElementById("clickMe").addEventListener('click',() => {
//         console.log("btn clicked")
//     })
// }
// attachEventListener()

// ==========map=================

// const arr = [1,2,3,4,5,6,7]
// function double(x){
//     return x*2
// }

// const output = arr.map(double)
// console.log(output)
// const output = arr.map((x) => x.toString() )


// const output = arr.filter((x) => {
//     return x % 2 === 0
// })
// console.log(output)


// const http = require('http')
// const fs = require('fs')

// fs.readFile('Write.js','utf8',(err,data) => {
//     return content = data
// })

// const server = http.createServer((req,res) => {
//     res.write(content)
//     res.end()
// })

// server.listen(2000,() => {
//     console.log('Server started')
// })

// =======Reverse a string=========

// function reverse(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverse("hello"))

// =======largest number in a array=======

// function findLargestNumber(arr){
//     return Math.max(...arr)
// }

// console.log(findLargestNumber([1,2,3,4,5,6,7,8,9]))

// =======factorial Calculation=============

// function factorial(n){
//     if(n===0 || n===1){
//         return 1;
//     }else{
//         return n * factorial(n - 1)
//     }
// }

// console.log(factorial(5))


// const express = require('express')
// const app = express()
// const router = express.Router()

// router.get('/',(req,res) => {
//     res.send('home Page')
// })

// router.get('/about',(req,res) => {
//     res.send('About page')
// })

// app.use('/',router)

// app.listen(2000,() => {
//     console.log("server started")
// })


//     const result =new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const success = false
//             if(success){
//                 resolve('Promise resolved')
//             }else{
//                 reject("rejected")
//             }
//         },1000)
//     })
//     console.log(result)

// result
//     .then((result) =>{
//         console.log(result)
//     })
//     .catch((err) => {
//         console.error(err)
//     })

// function hello(callback){
//     callback()
//     console.log("hello")
// }

// function something(){
//     console.log("callback")
// }

// hello(something)

// function fetchData(callback){
//     setTimeout(() => {
//         const data = {message : 'data fetched '}
//         callback(data)
//     },1000)
// }

// fetchData(
//     (error) => {
//         console.error('Error',error)
//     },
//     (result) => {
//         console.log(result.message)
//     }
// )


// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Hello world";
//         callback(data)
//     }, 1000)
// }

// fetchData((data) => {
//     console.log(data)
// })

// let num = 0
// function abc(){
//     console.log('abcefv',num++)
//     abc()
// }

// abc()

// console.log('5' + 5)
// console.log('x' + 5)
// console.log('java' + 'script' + 6)
// console.log(6 + '-6' + '9')
// console.log('5'+5+'js')

// let arr = [1,2,3,4,5,6]
// let sum = 0;
// let count = 0
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]%2 ==0){
//         sum += arr[i]
//         count++
//     }
// }
// console.log(sum/count)


// let arr = [1,2,3,4,5,6]

// let slicearr = arr.splice(1,0,5)
// console.log(slicearr)

// console.log(arr)


// let arr=[1,2,3,4]


// let newarr = arr.map(() => 1)

// console.log(newarr)


// let obj = {a:30,b:20}

// let {a,b} = obj

// console.log(a+b)




// function greet(name){
//     console.log(`helloo ${name}`)
// }

// greet.call(null,'Abhi')
// greet.apply(null,['Abhi'])

// let greetbob = greet.bind(null,'Abhi')
// greetbob()


 
// function sample(name){
//     console.log(`Hi ${name}`)
// }

// sample.call(null,'justy')



// function sample(hi){

// }

// function hi(){

// } Array.map(() => {

// })

// function sam1(a){
//     return function sam2(b){
//         return function sam3(c){
//             return a+b+c
//         }
//     }
// }

// console.log(sam1(1)(2)(3))

// const numbers = [1,2,3,4,5]

// const sqr = numbers.filter(() => 2)
// console.log(sqr)
// const even = numbers.filter((x) => x % 2 === 0)
// const sum = numbers.reduce((acc,curr) => acc + curr ,0)

// console.log(sqr) 
// console.log(even)
// console.log(sum)

// const arr = [2,3,5,7]
// let a=[]

// for(let i=1;i<10;i++){
//     if(!arr.includes(i)){
//         a.push(i)
//     }
// }
// console.log(a);




// const arr = [1,2,3,4,5]

// const copy = arr

// console.log(copy)


// const obj = {
//     name:'abhi',
//     age:19
// }

// function hello(callback){
//     callback()
//     console.log("hello")
// }

// function callback(){
//     console.log("callback")
// }

// hello(callback)



// const express = require('express')
// const app = express()


// app.get('/user/:id', (req,res) => {
//     const user = req.params.id
//     res.send(`hello ${user}`)
// })
 

// app.listen(8080,() => {
//     console.log("started")
// })
  