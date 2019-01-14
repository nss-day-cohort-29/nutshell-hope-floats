import taskCollection from "./taskCollection"
import taskList from "./taskList"
import taskEditCollection from "./taskEditCollection"


const tasks = {

    taskBuilder(taskObject) {
        let formTasks = document.createElement("article");

        let taskHeader = document.createElement("p");
        taskHeader.textContent = taskObject.taskName;

        let taskInput = document.createElement("h5");
        taskInput.textContent = taskObject.date;

        let taskComplete = document.createElement("h5");
        taskComplete.textContent = taskObject.completionDate

        let editButton = document.createElement("button");
        editButton.textContent = "Edit Task"
        editButton.setAttribute("id", `editTask--${taskObject.id}`)
        editButton.addEventListener("click", () => {
            let articleId = event.target.id
            
            let taskId = articleId.split("--")[1]
            
            taskCollection.getTasks(taskId)
                .then(response => {
                    taskEditCollection.createAndAppendForm(response)
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