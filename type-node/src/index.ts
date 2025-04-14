// 1
let x : number = 12
console.log(x);

//2
function greet(firstName:string) {
    console.log("Hello " + firstName);
    
}

//3
function sum(a:number, b: number): number {
    return a+b
}

//4
function isLegal(age:number): boolean {
    if (age>18) {
        return true;
    } else {
        return false;
    }
}

//7

interface User{
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
  // optional
}


function isLegalO(user:User): boolean {
    if (user.age>18) {
        return true;
    } else {
        return false;
    }
}

isLegalO({
    firstName: 'shudha',
    lastName: "sharma",
    age: 23
})

greet('ssu')

sum(12,32)

isLegal(23)

// 





