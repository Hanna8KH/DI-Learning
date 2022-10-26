// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

let sentence =  'This dress is not that bad ! You look nice!'

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

let wordNot = sentence.search("not")
// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentence.search("bad")
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if (wordNot === -1) {
    console.log(sentence)
} else if (wordNot < wordBad) {
    console.log('wordBad', wordBsd)
    console.log('wordNot', wordNot)
}

let start =sentence.slice(0, wordNot)
let end =sentence.slice(wordBad = 3)
console.log('sentance')
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
// Example:

