// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
we will get an array 
['bread', "apple", "orange", 'chicken', "carrot", "potato"]
how the browser decide to what quote it has to change '' or ""?

// ------2------
// const country = "USA";
// console.log([...country]);
I didnt understood how it works. like what does [] in console.log means? its creatin of array?
and as I get it ...country means that it will 'unpack' the const country.
does it mean that; 
1 - we have a const whis is a string, then 
2 - by console.log we create an array and then
3 - inside this array we unpack what we had in const country...
I messed up..
// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
It would be an array of two ',' i think => [,,]
Hmmm no. Ive got [undefined, undefined]
What does this commas mean?


// 🌟 Exercise 2 : Employees
// Instructions
// Using this array:

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents = users.map(())

function mapUsers (array, transform) {
    let welcomeStudents = [];
    for (let user of users) {
        welcomeStudents.push('Hello ' + user.firstName);
    }
    return welcomeStudents;
}

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = uses.filter((user) => user.role === "Full Stack Resident");

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const lastNames = fullStackResidents.map((user) => user.lastName);


const lastNames = users
.filter((user) => users.role === "Full Stack Resident");
.map((user) => user.lastName);



// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const singleString = epic.reduce((total, current) => (total += current + ' '),'');
const singleString = epic.join(' ');
// 🌟 Exercise 4 : Employees #2
// Instructions
// Using this object:

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

const studentsPassed = students.filter((student) => student.isPassed === true);
or
const studentsPassed = students.filter((student) => student.isPassed);

Bonus:

students
  .filter((student) => student.isPassed)
  .forEach((student) => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}!`);
  }) 