const showFormInputs = document.querySelector('form');
showFormInputs.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();

    const formData = new FormData(document.querySelector('form'));

    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    const dataString = JSON.stringify(data)
    
    const header = document.querySelector('h4');
    header.innerText = dataString; 
}  
