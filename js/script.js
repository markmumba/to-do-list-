
let input = document.querySelector('input');
let addButton = document.querySelector('button');
let taskListEl = document.querySelector('.list-group');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let deleteButton = document.querySelector('#delete-btn');

let oneTask = {};
let checked = " ";
let classtype = "";




addButton.addEventListener('click', function (e) {
    e.preventDefault();
    main()

});

taskListEl.addEventListener('click', function (e) {
    if (e.target && e.target.matches(".getbutton#delete-btn")) {
        console.log("yes");
    }
});

function main() {
    setttingUpTask();
    displayTaskList();

}

function setttingUpTask() {
    if (input.value) {
        let taskInput = input.value;
        oneTask[taskInput] = getPriority();
        input.value = "";
    }

}

function displayTaskList() {
    let taskItems = "";

    for (const task in oneTask) {
        taskItems += `     <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-semibold">${task}</div>
          Priority : ${oneTask[task]}
        </div>
        <div  class=" getbutton position-absolute bottom-5 end-0">
          <button id="delete-btn"type="button" class="btn btn-outline-danger">
            <i class="bi bi-x-circle-fill" style="color:danger;"></i>
            Delete
          </button>
        </div>
      </li>`
    }

    taskListEl.innerHTML = taskItems;

}

function addingPriorityLevel(priority) {
    if (priority === "High") {
        classtype += "list-group-item-warning";
    }
    else if (priority === "Medium") {
        classtype += "list-group-item-secondary";
    }
    else if (priority === "Low") {
        classtype += "list-group-item-info";
    }
    else {
        classtype += "list-group-item-light";
    }

    return classtype;
}

function getPriority() {
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            checked = checkboxes[i].value;
            checkboxes[i].checked = false;
        }
    }
    return checked;
}


function deleteTask(){
    for(const task of oneTask){
        let deleteTask = delete oneTask[task];
        console.log(deleteTask);

    }
}
