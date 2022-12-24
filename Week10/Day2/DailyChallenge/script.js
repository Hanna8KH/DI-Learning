// 1rst Daily Challenge

function makeAllCaps(words) {
    return new Promise ((resolve, reject) => {
        if (words.every(isString)) {
            resolve(words.map((word) => word.toUpperCase()));
        } else {
            reject('Sorry, it has to be a string')
        }
    })
}

function sortWords(words) {
    return new Promise ((resolve, reject) => {
        if (words.length >= 4) {
            resolve(words.sort());
        } else {
            reject('Sorry, array is too short')
        }
    })
}

function isString(argument) {
    return typeof argument === 'string';
}

const newArr = ['orange', 'pear', 'banana', 'melon', 'kiwi'];
makeAllCaps(newArr)
.then((res) => sortWords(res))
.then((res) => console.log(res))
.catch((err) => console.error(err));


// 2nd Daily Challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function getMorseDictionary  () {
    return new Promise((resolve, reject) => {
        if (morse.length === 0) {
            reject("Morse string is empty");
        } else {
            const morseObj = JSON.parse(morse);
            resolve(morseObj);
        }
    })
}

function isWordOk(word, possibleLetters) {
    const userLetters = word.split("");
    return userLetters.every((letter) => possibleLetters.includes(letter));
};

function translateUserInput(morseJS) {
    const word = prompt('Write a word');
    return new Promise((resolve, reject) => {
        const possibleLetters = Object.keys(morseJS);
        if (!isWordOk(word, possibleLetters)) {
            reject('Please type some lowercase characters');
        } else {
            const result = {word: word; morse: convertToMorse(word, morseJS)}
            resolve(result);
        }
    };    
};

function convertToMorse(word, morseJS) {
    const letters = word.split("");
    return letters.map((letter) => morseJS[letter]));
}

function joinsWords({word, morse}) {
    document.getElementById("word").innerText = word;
    morse.forEach((sign, i) => {
        const h5 = document.createElement('h5');
        h5.innerText = sign;
        document.getElementById('morse').appendChild(h5);
    })
};

getMorseDictionary()
.then((morseObj) => translateUserInput(morseObj);
.then((wordAndTranslation) => displayOnPage(wordAndTranslation));
.catch((err) => console.error(err));



