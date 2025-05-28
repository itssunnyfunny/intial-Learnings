

// a male enum

// a female enum 

// a funtion to check is they can marry or not


enum gender {
    male,
    female,
    gay,
    lasbian,
    bisexual,

}
interface person {
   
    age: number
    gender: gender
}


function canMarryOrNOt(person1:person, person2: person) {
    if(person1.age <18 && person2.age < 18){
        return false;
    }

    if (person1.gender == 0 && (person2.gender == 0 || person2.gender == 2 || person2.gender == 3)) {
        return false;
    } else {
         return true;
    }
}


 let result = canMarryOrNOt({age:21, gender:gender.male}, {age:19 , gender: gender.male})
 console.log(result);
 