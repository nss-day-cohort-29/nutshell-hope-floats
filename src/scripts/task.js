const tasks = {

    taskBuilder(taskObject) {
        let formTasks = document.createElement("article");

        let taskHeader = document.createElement("p");
        taskHeader.textContent = taskObject.task;

        let taskInput = document.createElement("h5");
        taskInput.textContent = taskObject.date;

        let taskComplete = document.createElement("h5");
        taskComplete.textContent = taskObject.completionDate

        formTasks.appendChild(taskHeader);
        formTasks.appendChild(taskInput);
        formTasks.appendChild(taskComplete);

        return formTasks
    }
}

export default tasks