const date = document.getElementById('date');
const showDate = document.querySelector('h4');

function convertDate (date) {
    const month = setPrefix(date.getMonth() +1);
    const day = setPrefix(date.getDate());
    const hours = setPrefix(date.getHours());
    const minutes = setPrefix(date.getMinutes());
    const seconds = setPrefix(date.getSeconds());
    return `${date.getFullYear()}${month}${day}${hours}${minutes}${seconds}`;
};

date.onchange = (event) => {
    showDate.innerText = convertDate(new Date (event.target.value));
};

function setPrefix (digit) {
    return digit < 10 ? `0${digit}` : digit;
};