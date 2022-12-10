
// HTML PART 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <form action="">
//         <div>
//             <label for="name">Name</label>
//             <input type="text" name="name" id="name" value="David">
//         </div>
//         <div>
//             <label for="comments">Comments</label>
//             <div>
//                 <textarea name="comments" id="comments" cols="30" rows="10" value="this ia a comment"></textarea>
//             </div>
//             <input type="submit " value="send" id="">
//         </div>
//     </form>
//     <script src="script.js"></script>
// </body>
// </html>


Exercise 1

by default we will have GET method 
If we use GET - the submitted info wll be in our URL after '?' encountering all key/values pairs separated by '&'

Exercise 2

if we use POST method - we get the information as part of the data body 

Exercise 3

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  // 1
  const stringify = JSON.stringify(marioGame)
  => we will get the marioGame as a one long string, including all nested objects 

  //2 
  const stringify = JSON.stringify(marioGame, null, 2)
  => this way it would look more easy to read (it would have spaces and be kinda ordered)

  //3
I didn't understood what is it for and how to make this breakpoint and debugger.

