// scopes
// global scope 
// block scope

// parent can't access the child but apposite are true

function one(){
    const username = "shani"
    function two(){
        const website = " you tube "
        console.log(username,website);
    }

   two()
}
//one()
//console.log(addOne(9));

function addOne (num){
    return num +1
}


const addTwo = function(num){
    return num +2
}
//console.log(addTwo(8));




