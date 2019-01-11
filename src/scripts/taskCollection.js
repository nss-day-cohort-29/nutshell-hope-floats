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
    }
}

export default taskCollection