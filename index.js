//javascript
/* EXERCISE A

Create a variable called test and assign a string value to it.

*/


console.log("\n---------------EXERCISEB-------------------");

let test = "english"
console.log(test)


/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/



console.log("\n----------------EXERCISEB-------------------");

let sum = 10 + 12
console.log(sum)


/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

console.log("\n----------------EXERCISEC---------------------");

let random = ("randomNumber")
randomNumber = [0<=20]


/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/
console.log("\n---------------ExerciseD------------------------");
let me = {
    name: "Jeffrey",
    surname: "Chuka",
    age: 30
}
console.log(me)


/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
console.log("\n------------------EXERCISEE-----------------------")
delete me.age


/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/
console.log("\n---------------EXERCiSEF-------------------------");



let arrayOfskills = ["HTML", "javaScript", "frontEnd"]
console.log(arrayOfskills)
 arrayOfskills = arrayOfskills + me

console.log(me)

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/
console.log("\n-----------------EXERCISEG-------------------------");


console.log(me)


// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/
function dice (string) {
    for( index = 0; 6 <6; index++)
    console.log(dice [index])

}


/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
console.log("\n----------------EXERCISE2---------------------");


/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

console.log("\n------------------EXERCISE3-----------------------");
function splitMe(src) {
    let split = "welcome to javascript";
    return split;

}

console.log(splitMe("welcome", "to", "javascript"))


/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.


















