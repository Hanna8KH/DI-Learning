import React from "react";
import { ExFour } from "./components/ExFour"
// import { UserFavoriteColors } from "./components/FavColorsComponents";
// EX 1

// export function App() {
//   return <h1>I do not use JSX</h1>
// }

// EX 2 

// export function App() {
//   const myelement = <h1>I Love JSX!</h1>;
//   return myelement
// };

// export function App() {
//   const sum = 5 + 5;
//   const message = <h1>React is {sum} times better with JSX</h1>;
//   return message
// }

// EX 3

// export function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favColors : ['blue','red','green','black']
//   };

//   return (
//     <>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteColors favorites={user.favColors} />
//     </>
//   )
// };


// EX 4

export function App () {
  return (
    <>
       <ExFour />
    </>
  )
}
