// basics of function

function sayMyName(){
    console.log("shani Yadav");
}

//sayMyName()

function addTwoNumbers(n1,n2){
  //  console.log(n1+n2);
  //let result = n1+n2
 // return result
 return n1 +n2
}

addTwoNumbers(5,3)
const result = addTwoNumbers(12,8)
//console.log(result);



// new User logged in or not
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
   return`${username} just logged in`
}

//console.log(loginUserMessage());
 

 // functions with objects
 function addCartItems(...num1){
    return num1
 }

 //console.log(addCartItems(123,543,655,190));


 // objects in fncs

 const user ={
        username : "shani",
        price    : 2999
 }

 function handleObjects(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
 }

 //handleObjects(user)
//  handleObjects({
//     username: "honey",
//     price : 399
// })

// array in fncs

const aArray = [100, 200, 300, 400,]

function handleArray(anyarr){
    return anyarr[2]
}

 //console.log(handleArray(aArray));

 console.log(handleArray([200, 3000, 54545, 2311]));






