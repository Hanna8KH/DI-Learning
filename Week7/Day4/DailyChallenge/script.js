let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (object) => {
    const fruits = object.fruits;
    fruits.forEach(fruit => console.log(fruit));
}

const cloneGroceries = () => {
    let user = client;
    user = 'Betty';
    const shopping = groceries;
    shopping.totalPrice = '35$';
    shopping.other.paid = false;
}
displayGroceries()
cloneGroceries()




Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// => No, cuz they are equal by value
Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// => Yes, its an object^ so they will br equal by reference
Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
// => maybe not, as its nested in object