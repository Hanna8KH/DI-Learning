// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const calculator = (x, a) => x + a;

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function kiloToGrams(weight ) {
    return weight * 1000;
};
kiloToGrams()

const kiloToGrams = function(weight) {
    return weight * 1000;
}
console.log(kiloToGrams);
// // Function expression is anonymous and yoy can use it in callback functions/ or put in a variable
// // but they are not hoisted as declaration functions

const kiloToGrams = (weight) => weight * 1000; 
console.log(kiloToGrams);



// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function addToDom (numberOfChildren, partnerName, geographicLocation, jobTitle) {
    const sentence = 'You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.';

    const h1 = document.createElement('h1');
    h1.innerText = sentence;
    document.body.appendChild(h1);
})





// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function(name) {
    const div = document.createElement('div');
    div.innerText = name;

    const image = document.createElement('img');
    image.src = 'https://picsum.photos/64';


    const navbar = document.querySelector('.navbar');
    navbar.appendChild(div);
    navbar.appendChild(image);

})




// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


function makeJuice (size) {
    const ingredients = [];
    addIngredients('orange', 'berry', 'apple');
    displayJuice(ingredients);

    function addIngredients (first, second, third) {
        ingredients.push(first, second, third);
    }

    function displayJuice (ingredients) {
        const firstPart = `The client wants a ${size} juice, containing `;
        let secondPart = '';
        const lastElement = (array, index) => index ===array.length - 1;
        ingredients.forEach((ingredient, i) => (secondPart += ingredient + lastElement(ingredients, i) ? "." : ", "));
        const sentance = firstPart + secondPart;

    };
};
makeJuice('big');