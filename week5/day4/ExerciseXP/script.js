
// Exercise 1 

// const h1 = document.querySelector('h1')
// // console.log('h1:', h1);
// const article = document.querySelector('article')
// article.lastElementChild.remove() 
// // is it possible to do this way?
// //  const lastPar = document.querySelectorAll('p')[3]
// //  lastPar.remove
// const h2 = document.querySelector('h2')



// h2.addEventListener("click", changeBackground)
// function changeBackground() {
//     h2.classList.add('red')
// }  
// // why we don't have to put dot befor red as it is a clscc from CSS?
// const h3 = document.querySelector('h3')
// h3.addEventListener("click", hideH3)
// function hideH3 () {
//     h3.classList.add('hide')
// }

// function addButton () {
//     const button = document.createElement("button")
//     button.textContent = 'Bold'
//     article.appendChild(button)
//     button.addEventListener('click', function () {
//         const allP = document.querySelectorAll('p')
//         for (const p of allP) {
//             p.classList.add('bold')
//         }
//     })
// }
// addButton()


// h1.addEventListener('mouseover', randomH1Size )

// function getRandomNumber() {
//     return Math.floor(Math.random() * 100 + 1)
// }

// function randomH1Size() {
//     const randomNumber = getRandomNumber()
//      h1.style.fontSize = randomNumber + 'px'
// }




// Exercise 2 

// const form = document.querySelector('form')

// // const button = document.getElementById('submit')

// function logFormImputs(e) {
//     e.preventDefault();
//     const firstName = document.querySelector('[name=fname]').value
//     const lastName = document.querySelector('[name=lname]').value
//     console.log(firstName, lastName);
//     if (firstName === '' || lastName === '') {
//         alert('Please fulfill all fields')
//     } else {
//         const ul = document.querySelector('.usersAnswer')
//         ul.innerHTML = ''
//         const firstLi = document.createElement('li')
//         const secondtLi = document.createElement('li')
//         firstLi.innerText = firstName
//         secondtLi.innerText = lastName
//         ul.append(firstLi, secondtLi)
//     }
//     console.log("EVENT", e);
// }

// form.addEventListener('submit', logFormImputs )
// console.log(form, firstName, lastName);


// Exercise 3

// let allBoldItems
// getBoldItems()
// highlight()
// returnNormal()
// function getBoldItems() {
//     allBoldItems = document.getElementsByTagName('strong')
// }

// function highlight() {
//     getBoldItems()
//     for (const boldItem of allBoldItems)
//     boldItem.style.color = 'blue'
// }

// function returnNormal() {
//     getBoldItems()
//     for (const item of allBoldItems)
//     item.style.color = 'black'
// }

// const par = document.querySelector('p')
// par.addEventListener('mouseover', highlight)
// par.addEventListener('mouseout', returnNormal)



// Exercise 4

// const form = document.getElementById('my-form')
// const radius = document.getElementById('radius')
// const volume = document.getElementById('volume')
// form.addEventListener('submit', submitted)


// function submitted(e) {
//     e.preventDefault();
//     const r = Number(radius.value)
//     if (Number.isNaN(r)) return;
//     const volumeCalc = (4/3) * Math.PI * r ** 3;
//     volume.value = volumeCalc.toFixed(2);
// }



// Exercise 5

// window.addEventListener('mouseover', () =>{
//     const body = document.querySelector('body');
//     body.style.backgroundColor = 'grey';
     
// })
// window.addEventListener('mouseout', () =>{
//     const body = document.querySelector('body');
//     body.style.backgroundColor = 'white';
     
// })

// window.addEventListener('blur', () =>{
//     const body = document.querySelector('body');
//     body.style.backgroundColor = 'grey';
     
// })
// window.addEventListener('focus', () =>{
//     const body = document.querySelector('body');
//     body.style.backgroundColor = 'white';
     
// })

//  document.addEventListener('keyup', (event) => console.log(event.keyCode);)
//  form.addEventListener('pointerenter', console.log("pointer inside the form");)