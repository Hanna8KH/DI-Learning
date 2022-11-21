// Exercise
// Analyse the code before executing it. What will be the output
// 1 . 
// var num = 8;
// var num = 10;

// console.log(num); => 10

// 2 . 
// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//   } else {
//     const message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(21)); => "Yay! You're old enough!";

// 3 . 
// Change the code so the variable i will be undefined outside of the for loop

// function numbers() {
//   for (var i = 0; i < 5; i += 1) {   => change var to let?
//     console.log(i);
//   }
//     console.log(i);
// }
// numbers();


// Exercise 1
// Create a function to check the year given by the user
// If the year is after 2000, you should display "You are in the 21st century", 
// else you should display "You live in the Middle Age"

let midYear = 2000;
function checkYear () {
  let currentYear = parseInt(prompt("What is the current year?"), 10);
  return (midYear < currentYear ? "You are in the 21st century" : "You live in the Middle Age")
}

// Exercise 2
// Using arrow function and ternary operator create a calculator 
// that returns the result of the calculus depending on the operator : +, - , * ,
// The function should be able to to take 2 numbers as parameters

const calculator = (x, y) => {
  let firstNumber = parseInt(prompt("Write your first number:"), 10);
  // let calculationType = parseInt(prompt("Choose the calculation type you want to proceed: + / - / * ."), 10);
  let calculationType = prompt("Choose the calculation type you want to proceed: + / - / * .");
  let secondNumber = parseInt(prompt("Write your second number:"), 10);

  let sum = firstNumber + secondNumber;
  let multiplier = firstNumber * secondNumber;
  let devision = firstNumber / secondNumber;
  return calculationType === '+' ? sum
        : calculationType === '*' ? multiplier
        : calculationType === '/' ? devision
        : "smth went wrong, try again please";
}

// const calculator = () => {
//   let x = parseInt(prompt("Write your first number:"), 10);
//   let calculationType = prompt("Choose the calculation type you want to proceed: + / - / * .");
//   let y = parseInt(prompt("Write your second number:"), 10);

//   let sum = x + y;
//   let multiplier = x * y;
//   let devision = x / y;
//   return calculationType === '+' ? sum
//         : calculationType === '*' ? multiplier
//         : calculationType === '/' ? devision
//         : "smth went wrong, try again please";
// }

// Exercise
// let myArr = [10,11,12,15,20];

// Create a function that selects only the even numbers in the array myArr

myArr.forEach(function(e, i, arr) {
  if (arr[i]%2 === 0) {
      console.log(e)
      }
  })

//   Exercise
// let myArr = ["wow","hey","bye"];

// Check if at least one element of the array starts with the letter 'h'

let myArr = ["wow","hey","bye"];

myArr.some((value) => { return (myArr.length[1] = 'h')})


// Exercise
// let myArr = ["hello","hey","hola"];

// Check if all the elements of the array start with the letter 'h'

let myArr = ["hello","hey","hola"];

myArr.every((value) => { return (myArr.length[1] = 'h')})