// special loop for particular
// for of loop 

// const arr = [1, 2, 3, 4, 5, 6]
// for (const num of arr) {
//     console.log(num);
// }


// const arr = ["shani", "shani", "shani"]
// for (const num of arr) {
//     console.log(num);
// }


// const greeting = "Hello World"
// for (const num of greeting) {
//     console.log(`Each char is ${num}`);
// }


// maps
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"united state of America")
// map.set('FR',"Frace")

//console.log(map);
// for (const [key, value] of map) {
//     console.log(key,':-',value);
// }

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// for object 
// For In
// const myObject = {
//     'game1':"NFS",
//     'game2': "spiderman ",
//     'game3': "GTA"  
// }

// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// for each^^^^^^^^^^^^^^^^^^^^^^^^^^^^###########************^^^^^^^^^^^^^^^^^^^^^^^^^

// for each
//const coding = ["js", "ruby", "java", "C++"]

// coding.forEach(function(item) {
//     console.log(item);
// });

// coding.forEach((item) => {
//     console.log(item);
// });

// coding.forEach((item,index,arr) => {
//     console.log(item , index ,arr);
// });


// 88888888888888888888888888888888888888888888888888888

// object in Array

// const mycoding = [
//     {
//         LN:"js",
//         LFN:"javascipt"
//     },
//     {
//         LN:"js",
//         LFN:"javascipt"
//     },
//       {
//         LN:"js",
//         LFN:"javascipt"
//     }
// ]


// mycoding.forEach((item) => {
//     console.log(item.LFN);
// });


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//Filter

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNum = myNum.filter((num)=> num<=5)
// console.log(newNum);


// const newNums =[]
// myNum.forEach((num) => {
//     if (num>=5) {
//         newNums.push(num)
//     }
// });

// console.log(newNums);


// 1111111111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

                              // map
//const myNum = [1,2,3,4,5]
// const newNum = myNum.map((num)=> num +10)
// console.log(newNum);


// const newNums = myNum
// .map((num)=> num*10)
// .map((num) => num +1)
// .filter((num)=> num>=40)

// console.log(newNums);


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Reduce

//const myNums = [1,2,3,4,5,5]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currvalue : ${currval}`);
//     return acc +currval
// },0)

// console.log(myTotal);


// const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)
// console.log(myTotal);
