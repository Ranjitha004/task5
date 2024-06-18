function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var task = document.createElement("li");
    task.textContent = taskInput.value;

    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.onclick = function() {
        task.parentNode.removeChild(task);
    };

  
    var completeButton = document.createElement("button");
    completeButton.textContent = "ADD";
    completeButton.onclick = function() {
        task.classList.toggle("completed");
    };

//ADDED EDIT BUTTON    
    var editButton = document.createElement("button");
    editButton.textContent = "EDIT";
    editButton.onclick = function() {
        var newTask = prompt("Edit your task:", task.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            task.textContent = newTask;
            task.appendChild(editButton);
            task.appendChild(completeButton);
            task.appendChild(deleteButton);
        }
    };

    task.appendChild(editButton);
    task.appendChild(completeButton);
    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = "";
}
