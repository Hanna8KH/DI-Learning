
// Exercise 1

// const div = document.getElementById('container')
// console.log(div)

// const richard = document.querySelector('ul.list').children[1]
// richard.innerHTML = 'Richard'

// const lists = document.querySelectorAll('ul.list')
// for (const list of lists) {
//     list.firstElementChild.innerText = "Anna"
// }

// const sarah = lists[1].children[1]
// lists[1].removeChild(sarah)

// for (const list of lists) {
//     list.classList.add('student_list')
// }
// lists[0].classList.add('university', 'attendance')



// Exercise 2

// const newDiv = document.querySelector('div')
// newDiv.style.padding = '15px';
// newDiv.style.background = 'lightblue'

// const noneLi = document.querySelector('ul > li')
// noneLi.style.display = 'none'

// const borderPete = document.querySelectorAll('ul > li')[1]
// borderPete.style.border = '2px solid black'

// const bodyFont = document.firstElementChild
// bodyFont.style.fontSize = '30px'

// //Bonus???

// Exercise 3


// const navBar = document.getElementById('navBar')
// navBar.setAttribute('id', 'socialNetworkNavigation')

// // const newLi = document.createElement('li')
// // const liNode = document.createTextNode('Logout');
// // newLi.appendChild(liNode);
// // ulList = document.querySelector('ul');
// // ulList.appendChild(newLi);

// const firstLi = document.querySelector('ul').firstElementChild
// console.log(firstLi.textContent)
// const lastLi = document.querySelector('ul').lastElementChild
// console.log(lastLi.textContent)


// Exercise 4
// don't know why it doesnt work

// const allBooks = [
//     {name: 'book1', 
//     title: 'Harry Potter',
//     author: 'J. Rolling',
//     image: 'https://picsum.photos/200',
//     alreadyRead: false},

//     {name: 'book2', 
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     image: 'https://picsum.photos/200',
//     alreadyRead: true}
// ]

// console.log(allBooks);
// const table = document.createElement("table")
// table.innerHTML = `
// <thead>
//   <tr>
//     <th colspan="3">My book list</th>
//   </tr>
// </thead>
// <tbody>
//   <tr class="${book[0].alreadyRead ? 'is-red' : ''}">
//     <td>${allBooks[0].title} written by ${allBooks[0].author}</td> 
//     <td><img src="${allBooks[0].image}"/></td> 
//     <td>Already read: ${allBooks[0].alreadyRead}</td> 
//   </tr>
//   <tr class="${book[1].alreadyRead ? 'is-red' : ''}>
//     <td>${allBooks[1].title} written by ${allBooks[1].author}</td> 
//     <td><img src="${allBooks[1].image}"/></td> 
//     <td>Already read: ${allBooks[1].alreadyRead}</td> 
//   </tr>
// </tbody>
// `
// console.log(table);
// const bookListDiv = document.querySelector(".list-books")
// console.log('bookListDiv:', bookListDiv);
// bookListDiv.appendChild(table)