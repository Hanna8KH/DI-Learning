const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// const usernames = getUsernames(gameInfo);
// function getUsernames (array) {
//     const usernames = [];
//     for (let i = 0; i < array.length; i++) {
//         usernames.push(array[i].username);
//     }
//     return usernames;
// }

// const usernames = getUsernames(gameInfo);
// function getUsernames (users) {
//     const usernames = [];
//     for (const user of users) {
//         usernames.push(user.username);
//     }
//     return usernames;
// }


// const usernames = getUsernames(gameInfo);
// function getUsernames (users) {
//     return users.map((user) => user.username);
// }


const usernames = gameInfo.map((user) => user.username);


// 2

// // const winners = ["becky", "susy"]

// function getWinners(users) {
//     const winners = [];
//     for (const user of users) {
//         if (user.score > 5) {
//             winners.push(user);
//         }
//     }
//     return winners;
// }


// function getWinners(users) {
//     return users.filter((user) => user.score > 5)
// }

const winners = gameInfo.filter((user) => user.score > 5)

// const totalScore = getTotalScore(gameInfo)
// function getTotalScore (users) {
//     let total = 0 
//     for (const user of users) {
//         total += player.score;
//     }
//     return total
// }

// function getTotalScore (users) {
//     return users.reduce((total, current) => total + current.score)
// }

const totalScore = gameInfo.reduce((total, user) => total + user.score, 0)