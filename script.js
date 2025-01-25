const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
function showChecked() {
    listContainer.innerHTML = localStorage.getItem('data');
    const tasks = listContainer.querySelectorAll('li');
    tasks.forEach(task => {
        if (!task.classList.contains('checked')) {
            task.style.display = 'none'; 
        }
    });
}
function showUnchecked() {
    listContainer.innerHTML = localStorage.getItem('data');
    const tasks = listContainer.querySelectorAll('li');
    tasks.forEach(task => {
        if (task.classList.contains('checked')) {
            task.style.display = 'none'; 
        }
    });
}

showTask();