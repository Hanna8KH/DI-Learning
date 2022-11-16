// Exercise 1 : List Of People
// Instructions

// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift()
// people.splice(2, 1, 'Jason')
// people.push('Anna')
// console.log(people);
// const Mary = people.indexOf('Mary')
// console.log(Mary);
// const newArr = people.slice(1, 3)
// console.log(newArr);



// Why we can't do the same by declaring new variables like below?

// const arr1 = people.shift()
// const arr2 = arr1.splice(1, 1, 'Jason')
// console.log(people);
// console.log(arr1);
// console.log(arr2);
 

// // // // // dont understand this part // // // // // // 

// Write code that gives the index of “Foo”. Why does it return -1 ?
//WHERE TO PUT THIS NEW VARIABLE WITH VALUE 'FOO'?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
// const last = people.pop();
// const last = people.slice(-1); //why does this work with -1? -1 index have to be before zero index^ that means before Mary 
// const last = people[people.length - 1];

// console.log(last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
// people.forEach(function(i) {
//     console.log(i);
// })

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// for (let i of people) {
//     if (i == 'Jason') { 
//         console.log(i);
//         break;
//       }
//       console.log(i)
//  }







// 🌟 Exercise 2 : Your Favorite Colors

// const colors = ['blue', 'black', 'orange', 'red']
// for (let i = 0; i < colors.length; i++) {
//     console.log(`My #${i+1} choice is ${colors[i]}`);
// }

// const colors = ['blue', 'black', 'orange', 'red']
// const sufx = ['st', 'nd', 'rd', 'th']
// for (let i = 0; i < colors.length; i++) {
//     console.log(`My ${i+1}${sufx[i]} choice is ${colors[i]}`);
// }



// 🌟 Exercise 3 : Repeat The Question

// let number = null;

// while (number < 10) {
//     const answer = prompt('write a number')
//     number = Number(answer)
// }
// // // // // // // why not DO WHILE loop?// // // // // // 


// 🌟 Exercise 4 : Building Management

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(`the number of floors in the building is ${building.numberOfFloors}`);
// console.log(`the number of apartments on the first floor is ${building.numberOfAptByFloor.firstFloor}`);
// console.log(`the number of apartments on the third floor is ${building.numberOfAptByFloor.thirdFloor}`);
// console.log(building.nameOfTenants[1], ' has ', building.numberOfRoomsAndRent.dan[0], ' rooms in his apartment')


// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. 
// // If it is, than increase Dan’s rent to 1200.
// const sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[0]
// console.log(sum);

// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// let danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahRent + davidRent > danRent) {
//     building.numberOfRoomsAndRent.dan[1] = 1200
// }





// // 🌟 Exercise 5 : Family
// // Instructions
// // Create an object called family with a few key value pairs.
// // Using a for in loop, console.log the keys of the object.
// // Using a for in loop, console.log the values of the object.

// const family = {
//     dad: 'David',
//     mum: 'Vika',
//     daughter: 'Sofi',
// }

// for (const i in family) {
//     console.log(i, family[i]);
// }





// // Exercise 6 : Rudolf
// // Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// // Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
// let sentence = " " 
// for (const i in details) {
//     sentence = sentence + ' ' + i + ' ' + details[i]
// }
// console.log(sentence);



// // Exercise 7 : Secret Group

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// // Hint: a string is an array of letters
// // Console.log the name of their secret society. The output should be “ABJKPS”

// let abbreviation = ""
// for (const name of names.sort()) {
//     abbreviation = abbreviation + name[0]
// }
// console.log(abbreviation);