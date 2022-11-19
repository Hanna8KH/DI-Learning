const tasks = [];
const form = document.getElementById('form');
const ul = document.getElementById('liTask');
form.addEventListener("submit", handleSubmit);
// addTask()

function handleSubmit (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const task = formData.get('task');
    if (task === '') return;
    tasks.push(task);
    renderTasks (task)
    form.reset();
}
function renderTasks () {
    ul.innerHTML = '';
    for (const task of tasks) {
        const li = createLi(task);
        ul.append(li);
    } 
}

function createLi(task) {
    const li = document.createElement('li');
    const deleteMark = document.createElement('i');
    deleteMark.classList.add('fa-solid', 'fa-xmark');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    const span = document.createElement('lable');
    span.innerText = task;

    li.append(deleteMark);
    li.append(checkBox);
    li.append(span);
    
    return li;
}
