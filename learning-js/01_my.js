  /*console.log("Shani")
const id = 12423244
let name = "shani"
city = "jaipur"
var mytype = "12334"
console.table( [id, city, mytype , name])

// operations 



// primitives
// 7 types: String , Nunber , Boolean , null , undefined , symbol , BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shani", "Raj", "sur"]
let myObj = {
  name : "Shani",
  age : 20,
}

const myFunction = function(){
  console.log("Hello World");
}

console.log(typeof myFunction);

// #########################################################################################################

//Stack (Primitive), Heap (Non-Primitive)

let myname = "shaniYadav"
let secondName = myname
secondName = "Mahesh"
console.log(myname);
console.log(secondName);

// ++++++++++++++++++++++++++++++++

let userOne ={
  email: "userOne@gmail.com",
  upi : "userOne@ybl"
}

 userTwo= userOne

userTwo.email = "userSecond@google.com"
console.log(userOne);
console.log(userTwo);


// ------------------------------------------$$$****  String  ****$$$------------------------------------------------------
const gameName = new String('shanny')
console.log(gameName[1]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-5,0);
console.log(anotherString);

const newString2 = "mahesh"
console.log(newString2);
console.log(newString2.trim());

const url = "http://sunny.com/sunny%76yadav"
console.log(url.replace('%76' , '____'));



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Numbers and Maths @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // maths
  console.log(Math.round(76.5));
  console.log(Math.ceil(45.3));
  console.log(Math.floor(23.6));
  console.log();

  console.log(Math.min(4,7,6,4,3,1,));
  console.log(Math.max(8,4,3,5,3,5,5));
  console.log();

  console.log(Math.random());
  console.log(Math.random()*10 +1);
  console.log();

  const min = 10
  const max = 20

  console.log(Math.floor(Math.random()*(max-min +1)+min));

  


  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Dates and Times ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // dates

    let myDate = new Date()
    console.log(myDate.toString());
    console.log(myDate.toDateString());
    console.log(myDate.toLocaleDateString())
    console.log();

    // let myCreateDate = new Date(2023, 0, 23)
    // let myCreateDate = new Date(2023, 0, 23, 4, 4)
      let myCreateDate = new Date("01-14-2023")
    console.log(myCreateDate.toDateString());
    
    let myCreateDate = new Date("01-14-2023")

    // time 

    let myTimeStamp = Date.now()
    console.log(myTimeStamp);
    console.log(myCreateDate.getTime());

    // convert in seconds by dividing with 1000
    */
   let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getMonth());
    console.log(newDate.getDay());

    newDate.toLocaleString('default',{
      weekday: "long",
    })





    // first module is finished ( 1 SECTION HAS COMPLETED)$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$







    






