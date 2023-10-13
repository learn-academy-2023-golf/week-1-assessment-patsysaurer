// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Correct, the answer was 10 because there are ten characters in the string assigned to the variable cohort. 

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: Semi-correct, the correct answer was o without the quotes.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Correct, the console returned the index position of one, which is the second item in the array Ruby.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())
// console.log(weekendDays.join(", ").toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: Wrong, it returned an error because the method does not perform on the array data type. To fix the error I added a .join(", ") built-in method before the .toUpperCase(). to first convert it into a string and then apply the .toUpperCase() built-in method. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)


// a) Your answer: 6, 6, 7, 9
// b) Verify and explain: Wrong. The typeOf returned number. This is because the length of the variable dataTypes is indeed a number (4). 
