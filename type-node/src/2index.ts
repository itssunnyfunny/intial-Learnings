 
 // enum 
 enum Direction {
    up, 
    down,
    left, 
    Right
 }

//  you can assign it value its own by defoult lts 0,1,2,3

 function doSomething(kypress:Direction) {
    if (kypress == Direction.up) {
        console.log("up is pressed");
        
    } else if (kypress == Direction.down){
        console.log("down is pressed");
        
    } else if (kypress == Direction.Right){
        console.log("right is pressed");
        
    }
    else {
         console.log("left is pressed ");
         
    }
 }


//  doSomething(Direction.up)



//  console.log(Direction.Right);
 

// generics

// <T> = give the type by who is calling 
//  at the time it calls give the type like -- <string>, <number>, <boolean>
// its optinal to give the 

 function identity<T>(arg:T) {
    return arg;  
 }

 let output1 = identity<string>("mystring");
 let output2 = identity<number>(12323232);

 output1.toUpperCase()


 function getFirstElement<T>(arr: T[]) {
    return arr[0];
 }


 const elm = getFirstElement(["someone", "onother", "someone else"])
 console.log(elm.toUpperCase());
 





