// Exercise 1:
// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];



const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana from the array.
delete fruits[0]

// Sort the array in alphabetical order.
fruits.sort()

// Add “Kiwi” to the end of the array.
fruits.shuft('Kiwi')

// Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.slice(0,1)

// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
fruits.reverse()  

// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]
console.log('fruits', )


// Exercise 2:

// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])
