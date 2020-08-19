
const taskInput = document.getElementById('task');
const listEl = document.getElementById('list');

document.getElementById('addTaskBtn').addEventListener('click', onAddBtnClick);
document.addEventListener('click', onDoneTaskClick);
document.addEventListener('click', onDeleteClick);



function onAddBtnClick() {
    addNewTask(taskInput.value);
    clearInput();

}

function addNewTask(title) {
    const li = document.createElement('LI');
    li.className = 'roster';
    li.textContent = title;
    deleteCreatedTask(li);
    listEl.append(li);
}

function deleteCreatedTask(element) {
    const span = document.createElement('span');
    span.className = 'delete';
    span.textContent = 'х';
    element.append(span);
}

function onDeleteClick(e){
    if(e.target.classList.contains('delete')) {
        e.target.parentNode.remove(this);
    }

}

function clearInput() {
    taskInput.value = '';
}

function onDoneTaskClick(e) {

    if (e.target.classList.contains('list')){
        e.target.classList.toggle('active');
    }

}


