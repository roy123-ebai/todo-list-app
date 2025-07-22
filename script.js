function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerText = taskText;

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => taskList.removeChild(newTask);

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = "";
  }
}
