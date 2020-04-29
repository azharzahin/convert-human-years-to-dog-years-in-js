// this is my age 
let myAge = 26;
// - 2 from my age
let laterYears = (myAge - 2);
// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4



// this is earlyyears and we multiply by 10.5
let earlyYears = 2; 
earlyYears *= 10.5;

// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
myAgeInDogYears = earlyYears + laterYears ;

/* Let’s use a string method next.
Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
The toLowerCase method returns a string with all lowercase letters.*/

const myName = "A.Zahin";
myName.toLowerCase();

console.log(` My name is   ${myName}. I am  ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
