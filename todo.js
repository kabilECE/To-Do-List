function addTask() {
    var taskInput = document.getElementById("remainder_box").value;

    if (taskInput.trim() !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskItem = document.createElement("li");

        
        var taskText = document.createElement("span");
        taskText.textContent = taskInput;
        taskText.className = "text_box";

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit";
        editButton.onclick = function() {
            var updatedText = prompt("Edit task:", taskText.textContent.trim());
            if (updatedText !== null) {
                taskText.textContent = updatedText;
            }
        };
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className ="delete";
        deleteButton.onclick = function() {
            taskList.removeChild(newTaskItem);
        }; 
        newTaskItem.appendChild(taskText);
        newTaskItem.appendChild(editButton);
        newTaskItem.appendChild(deleteButton); 
        taskList.appendChild(newTaskItem);
        document.getElementById("remainder_box").value = "";
    }}
