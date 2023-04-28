let taskInput = document.getElementById("new-task")
let addButton = document.getElementById("add-task")
let taskList = document.getElementById("task-list")

// Adding a new task
addButton.addEventListener("click", function(e) {
    e.preventDefault()
    if(taskInput.value == "") return

    let task = document.createElement("li")
    task.innerHTML = `<span>${taskInput.value}</span>`

    // Creating the delete button
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    deleteButton.classList.add("delete-task")
    task.appendChild(deleteButton)

    taskList.prepend(task)
    taskInput.value = ""
    
    deleteButton.addEventListener("click", function(e) {
        if(e.target.classList.contains("delete-task"))
            e.target.parentNode.remove()
    })
})