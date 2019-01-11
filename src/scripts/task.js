import taskCollection from "./taskCollection"
import taskList from "./taskList"
import taskEditCollection from "./taskEditCollection"


const tasks = {

    taskBuilder(taskObject) {
        let formTasks = document.createElement("article");

        let taskHeader = document.createElement("p");
        taskHeader.textContent = taskObject.task;

        let taskInput = document.createElement("h5");
        taskInput.textContent = taskObject.date;

        let taskComplete = document.createElement("h5");
        taskComplete.textContent = taskObject.completionDate

        let editButton = document.createElement("button");
        editButton.textContent = "Edit Task"
        editButton.addEventListener("click", () => {
            let articleId = event.target.parentNode.id
            let taskId = articleId.split("--")[1]
            taskCollection.getTasks(taskId)
                .then(reponse => {
                    taskList.taskify()
                })
        })

        formTasks.appendChild(taskHeader);
        formTasks.appendChild(taskInput);
        formTasks.appendChild(taskComplete);
        formTasks.appendChild(editButton)

        return formTasks
    }
}

export default tasks