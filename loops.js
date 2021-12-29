// for loops, for of, for in , while loops.
// -----Arrays
// for loops: loop n numbers of times
// for of: loops through all elements of an array.
// -----Objects
// for in: loops through all properties in an object.


// while: loops as long as a certain condition is met.



// for loop
for(let i = 0; i < 5; i++){
   console.log(i);
}


// for of loop
const users =[ 'max','Anna'];

for(const user of users){
    console.log(user);
}


// for in loop

const loggedInUser = {
    name: 'joes',
    age: 32,
    idAdmin: false
};


for(const propertyName in loggedInUser){
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

// while loops
let isFinished = false;

while(!isFinished){
 isFinished = confirm('do you want to quite?')
}
console.log('Done!')