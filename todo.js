const addItem = document.getElementById("btn");
const todoCard = document.getElementById("todo");
const completedCard = document.getElementById("completed");
const taskName = document.getElementById("taskname");
const menuAdd = document.getElementById("menu-add");

function addTask() {
  if (taskName.value != "") {
    const newTaskElement = document.createElement("div");
    const taskTitle = document.createElement("h4");
    const taskOperators = document.createElement("div");
    taskTitle.textContent = taskName.value;
    taskTitle.className = "task-title";
    newTaskElement.className = "todo-card";
    newTaskElement.prepend(taskTitle);
    taskOperators.className = "task-operator";
    taskOperators.innerHTML = `
          <span onclick="moveToDone(this)" class="material-symbols-outlined done">
          check_circle
          </span>
          <span onclick="changeName(this)" class="material-symbols-outlined edit">
          edit_square
          </span>
          <span onclick="removeTask(this)" class="material-symbols-outlined remove">
          do_not_disturb_on
          </span>
        `;
    newTaskElement.append(taskOperators);
    todoCard.append(newTaskElement);
  } else {
    const inputError = document.createElement("p");
    inputError.textContent = "نام تسک را وارد کنید";
    inputError.className = "error-text";
    menuAdd.append(inputError);
    setTimeout(() => {
      menuAdd.removeChild(inputError);
    }, 3000);
  }
}
addItem.addEventListener("click", addTask);

// Add Task with Enter Key
function addTaskOnKeyPress(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    addItem.click();
  }
}
taskName.addEventListener("keyup", addTaskOnKeyPress);

// Remove Task Onclick
function removeTask(element) {
  const deletedElement = element.closest(".todo-card");
  deletedElement.remove();
}

// Change Task Name
function changeName(element) {
  const taskCard = element.parentElement.parentElement;
  const taskTitle = taskCard.querySelector(".task-title");
  const newInput = document.createElement("input");
  newInput.style.width = "100%";
  newInput.style.textAlign = "center";
  newInput.style.fontSize = "1.8rem";
  newInput.type = "text";
  newInput.value = taskTitle.textContent;
  newInput.className = "task-title-input";
  taskTitle.replaceWith(newInput);

  newInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const updatedTitle = document.createElement("h4");
      updatedTitle.textContent = newInput.value;
      updatedTitle.className = "task-title";
      newInput.replaceWith(updatedTitle);
    }
  });
}

// Move Task to Done
function moveToDone(element) {
  const taskCard = element.parentElement.parentElement;
  completedCard.appendChild(taskCard);
  element.remove();
}
