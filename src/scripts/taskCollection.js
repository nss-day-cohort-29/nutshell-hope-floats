const taskCollection = {

    getAllTasks() {
        return fetch ("http://localhost:8088/Tasks")
        .then(response => response.json())
    },

    postNewTask(newTaskToSave) {
        return fetch("http://localhost:8088/Tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTaskToSave)
        })
    },

    getTasks(taskId) {
        return fetch(`http://localhost:8088/Tasks/${taskId}`)
        .then(response => response.json())
    },
    editedTask(taskId, taskToEdit) {
        return fetch(`http://localhost:8088/Tasks/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToEdit)
        })
    }
}

export default taskCollection