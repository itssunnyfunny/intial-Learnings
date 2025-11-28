// objects
// objects literals
/*

const mySym = Symbol("key1")

const jsUser = {
    name : "Shani",
    "full name": "Shani Yadav",
    [mySym] : "mykey1",
    age : 19,
    location: "jaunpur",
    email: "shani@gmail.com",
    isLoggedIn : false,
    lastLoggedIn: ["monday", "friday"]
}

console.log(jsUser.email);
 console.log(jsUser["email"]);
 console.log(jsUser["full name"]);
 console.log(jsUser[mySym]);


 // functions in object
 */

 // object 2nd

 //const tinderUser = new Object()
 const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "Sunny"
 tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser ={
    email : "sunny@gmail.com",
    fullname:{
          userFullname : {
            firstname : "shani",
            lastname  : "Yadav"

          }
    }
}

//console.log(regularUser.fullname.userFullname.lastname);

const obj1= {1:"a", 2:"b"}
const obj2= {3:"c", 4:"d"}
const obj3= {5:"e", 6:"f"}

//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));








