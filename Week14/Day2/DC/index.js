const fs = require('fs');
const characters = fs.readFileSync("RightLeft.txt", "utf-8").split("");

let position = 0;
let step = 0;
let firstHit = null;
characters.forEach(char => {
for (const char of characters) {
    if (char != '<' && char != '>') 
        return console.log('smth went wrong');

    const difference = char === '<' ? -1: 1;
    position += difference;
    step++;
    if (position === -1 && firstHit === null) {
        firstHit = step
        console.log('we hit -1 ! Current step:', firstHit);
    }
};
});

let leftOrRight = whatSide(position)

console.log(`${position} steps to the ${leftOrRight}`);

function whatSide(position) {
    if (position === 0) return '';
    return position > 0 ? 'right' : 'left';
}
    