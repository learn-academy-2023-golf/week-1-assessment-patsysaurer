// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// 1. Create a new variable named combinedPadresWorldSeriesRuns that will hold the result of the two concatinated arrays using the .concat() 
// 2. Log the new variable with the .length attached to it.

const combinedPadresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(combinedPadresWorldSeriesRuns.length)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// 1. Create a variable to hold the new array named currentCohortArray.
// 2. Assign it to the currentCohort variable. 
// 3. Attach the .split("") method to the currentCohort variable to create a new array.
// 4. Chain the .reverse() method to the .split("") to reverse the array items
// 5. Chain the .join("") method to the .reverse() to create a reversed string
// 6. Log the new variable currentCohortArray.

const currentCohortArray = currentCohort.split("").reverse().join("")
console.log(currentCohortArray)


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:

// 1. Create a for loop to iterate through each item in the array
// 2. Inside the for loop, create an if statement to filter stockExchange array and check each item to see if it is even or odd using the % modulo operator and the !== bang operator.
// 3. Log the odd numbers.

for(let i = 0; i < stockExchange.length; i++){
    if(stockExchange[i] % 2 !== 0){
        console.log(stockExchange[i])
    } 
}