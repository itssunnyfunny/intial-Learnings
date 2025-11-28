// arrays
/*

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["spiderman", "ironman", "hulk"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr2[0]);


// slice / splice

 console.log("a", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B" , myArr);
console.log();

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C" , myArr);
console.log();

// Arary 2
const marvelHeros = ["ironman", "thor", "hulk"]
const dcHeross   =  ["superman", "flash","batman"]
 const allHeros  =  [...marvelHeros, ...dcHeross]
 console.log(allHeros);
 */


 const anArr = [1,2,3,[4,5],6,7,[8,9,1,[2,3,4,]]]

 const newanArr = anArr.flat(3)
 console.log();
 console.log(newanArr);
 console.log();

 console.log(Array.isArray("shani"));
 console.log(Array.from("shani"));

console.log( );
let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));
