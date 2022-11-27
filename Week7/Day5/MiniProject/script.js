const quotes = [
  {
    id: 0,
    author: "Olaf",
    quote: "Some people are worth melting for.",
  },
  {
    id: 1,
    author: "Master Oogway",
    quote: "Yesterday is history, Tomorrow is a mystery, but today is a gift. That is why it is called the present.",
  },
  {
    id: 2,
    author: "Iroh (Avatar: The Last Airbender)",
    quote: "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",
  },
];

const generateQuoteButton = document.getElementById('generateQuoteButton');
generateQuoteButton.onclick = qenerateQuote;
let nowQuoteIndex = -1;


function qenerateQuote() {
    const section = document.getElementByTagName('section');
    const newQuoteIndex = Math.floor(Math.random()*quotes.length);

     do { 
        newQuoteIndex
     } while (
        newQuoteIndex === nowQuoteIndex
     );

    const quote = quotes
    section.innerText = 
 
}

// = > I got stuck... have to return to this ex today
// => dont understand hoe to get the concrete quote through index that i get in newQuoteIndex