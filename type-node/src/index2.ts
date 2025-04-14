let sx: string = "somemhting";

function sree(number:number): number {
    return number * number
}



console.log(sree(12));



 interface User1{
    firstName: string;
    lastname: string;
    age: number;
    email?: string
 }
function isLegalo(user:User1) {
    console.log(user.firstName);
    console.log(user.lastname);
    if (user.age>18) {
        console.log("our are ready becouse your age is "+ user.age);
        
    }
}


isLegalo({
    firstName: "shani",
    lastname: "yadav",
    age: 21,
    email: 'shani@gmail.com'
});

type some = number | string

let arr2:string[] = ["1,2,4,5", '4343434343', '34443224']
