// Use Express to create a few routes:
// The route /aboutMe/:hobby: displays the name of one hobby (ie. the value of the route parameter).
// If the parameter is not a string (ie. numbers or else), set the status to 404.
// The route /pic : displays an HTML file with a picture of your choice.
// The route /form : displays an HTML file.
// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the browser at the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.



const express = require('express');

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get("/aboutMe/hobby", handleHobby);
app.get("/pic", displayPic);
app.post("/formData", handlePost)

function handlePost(req, res) {
    const email = req.body.emaill;
    const message = req.body.message;
    res.send(`${email} sent a message: ${message}`)
}


function displayPic(req, res) {
    res.send("<img src='https://i.picsum.photos/id/1003/200/300.jpg?hmac=EyW0hjzA-KJ6r3bbEy9Ufw2Y2SeTmRSnusDY_g2czPg' />")

}



function handleHobby(req, res) {
    const hobby = req.params.hobby;
    if (!isLetters(hobby)) return res.status('no numbers');
    res.send('Hobby')
    console.log('hobby:', hobby);
}

function isLetters(str) {
    const noNumbersRegex = /^[A-Za-z]+$/;
    return noNumbersRegex.test(str);

}

app.listen(PORT, () => {
    console.log('Server has been started.');
}); 
 