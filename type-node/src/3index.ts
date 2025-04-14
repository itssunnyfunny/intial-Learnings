

// enum


// enum Status {
//    sucesss = 200,
//    fail = 404,
//    error = 505
// }   



// function some(any:Status) {
//     if (any == Status.sucesss) {
//         console.log(" user logged in successfully ");
        
//     } else {
//         console.log("something went wrong ");
        
//     }
// }

// some(Status.error)


// generics

function gen<T>(arr:T[]) {
    return arr[1]
}


 let out = gen([1,2,3,4,5])
 let our = gen<string>(['wsd','osfdfs', 'dff'])

 console.log(our);
 



