// Exercise 1 : Scope
// // #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
} // would be a = 3, because if clause is true, so we redeclare the variable let a to 3 . 

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// => it would not redeclare to 3 as constants are not redeclareable
// => we will get an error?

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // => 0 - as funThree() doesn't redeclare the variable a inside this function 
// and it doesnt have connection with funTwo()
funcTwo() // => 5 - as it has it's own scope inside which variable a is redeclared to 5 
//  we'll get undefined as we dont have console.log inside this function, but the variable a will be redeclared in global scope
funcThree() // => a = 5, as it was redeclared by funTwo()

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// the funTwo won't work as we're not able to give the constants new values 
// Only if we'll create new const a inside funTwo, but this way it would.t redeclare the outside const a . 
// It would exist only iside this funTwo function.

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // => nothing will happen as we dont have smth that will ask the function to console.lod window.a, for example
funcFive() // => alert will show that a equal to 5 as we changed this variable on global scope by previous function - funTwo

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() // => a equal to 'test' as it's inside the calling function function scipe privileged then global scope if we redeclare variable inside of function 
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// the const a inside the funSix will exist only inside this function. 
//We would just declare a new variable 'const a' for this function which will have only function scope 


//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// => in the if block a will be equal to 5, outside of the if block a = 2




// Exercise 2 : Ternary Operator

const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);





// Exercise 3 : Is It A String ?

// const isString = (arg) => (typeof arg === 'string' ? true : false)
const isString = (arg) => typeof arg === 'string' ?

console.log(isString('hi')); // - true
console.log(isString(54)); // - false



// 🌟 Exercise 4 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// for (let i = 0; i < colors.length; i++) {
//     const color = colors[i];
//     console.log(`#${i+1} choise is ${color}`);
// }

colors.forEach(listColors);

function listColors(color, i) {
    console.log(`#${i+1}choice is ${color}`);
}

// colors.forEach((color, i) => console.log(`#${i+1}choice is ${color}`));

const violet = colors.some((color) => color === "Violet")




// 🌟 Exercise 5 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, i) => {
    const incrementIndex = index + 1;
    console.log(`${incrementIndex}${getOrdinal(incrementIndex)} choise is${color}`);
});

function getOrdinal(i) {
    if (i === 1 || i === 2 || i === 3) return ordinal[i];
    return ordinal[0];
}


// Exercise 6 : Bank Details

let bankAmount = 0;
const vat = 0.17;
details = ["+200", "-100", "+146", "+167", "-2900"];

const currentBankAcc = addVat(details);

function addVat(expenses) {
    let total = 0;
    expenses.forEach(expense => {
        const toNumber = Number(expense);
        const expensePlusVat = toNumber * (1 + vat);
        total = total + expensePlusVat;
    });
    return total;
}

// function addVat(expenses) {
//     return expenses.reduce((total, current) => {
//         return (total += Number(current) * 1.17)
//     },
//     0;
// }









Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
Display your current bankAccount standing at the end of the month.