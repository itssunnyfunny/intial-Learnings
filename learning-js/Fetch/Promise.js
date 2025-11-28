//fetch('https://somthing.com').then().catch().finally()


// const promiseOne = new Promise(function(resolve,reject){
//     // do an async task
//     // DB calls, cryptography, nework
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// });

// promiseOne.then(function() {
//     console.log("Promise consumed");

// })



// new Promise (function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is complete 2!");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 is resolved !");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName:"shani",email: "shani.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//         resolve({userName: "shani", password:"123"})
//     }
//     else{
//         reject('error: something went wrong!')
//     }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.userName;
// })
// .then((userName)=>{
//     console.log(userName);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected !");
// })


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//                 let error = true
//                 if(!error){
//                 resolve({userName: "shani", password:"123"})
//             }
//             else{
//                 reject('error: something went wrong!')
//             }
//             },1000)
//         })

//         async function consumePromiseFive(){
//             try {
//               const response=  await promiseFive
//               console.log(response);
//             } catch (error) {
//                 console.log(error);
//             }
//         }


//         consumePromiseFive()
//***************************************************************************************************************************** */

// async function getAllUser(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//        const data = await  response.json()
//        console.log(data);
//     } catch (error) {
//         console.log("E : ",error);
//     }
// };
 
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


