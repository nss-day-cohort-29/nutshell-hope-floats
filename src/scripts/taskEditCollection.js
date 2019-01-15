import taskCollection from "./taskCollection"
import taskList from "./taskList"

const taskEditCollection = {
    createAndAppendForm (taskObjectToEdit) {

        let taskEditField = document.createElement("fieldset");

        let taskEditOutput = document.createElement("p");

        let taskEditLabel = document.createElement("label");
        taskEditLabel.textContent = "taskName"
        let taskEditInput = document.createElement("input");
        taskEditInput.value = taskObjectToEdit.taskName

        taskEditField.appendChild(taskEditLabel);
        taskEditField.appendChild(taskEditInput);

        let taskCompletionField = document.createElement("fieldset");

        let taskCompletionOutput = document.createElement("h5");

        let taskCompletionLabel = document.createElement("label");
        taskCompletionLabel.textContent = "taskCompletionDate"
        let taskCompletionInput = document.createElement("input");
        taskCompletionInput.value = taskObjectToEdit.completionDate

        let taskCompletionCheck = document.createElement("input")
        taskCompletionCheck.setAttribute("type", "checkbox");

        taskCompletionField.appendChild(taskCompletionLabel);
        taskCompletionField.appendChild(taskCompletionInput);
        taskCompletionField.appendChild(taskCompletionCheck);

        let editButton = document.createElement("button");
        editButton.textContent = "Update Task"

        editButton.addEventListener("click", () => {
            let editedTask = {
                taskName: taskEditInput.value,
                completionDate: taskCompletionInput.value
            }
            
            taskCollection.editedTask(taskObjectToEdit.id, editedTask)
            .then( () => {
                taskList.taskify()
            })
        })

        let taskItemArticle = document.querySelector(".formTasks")
        while (taskItemArticle.firstChild) {
            taskItemArticle.removeChild(taskItemArticle.firstChild);
        }
        taskItemArticle.appendChild(taskEditField);
        taskItemArticle.appendChild(taskCompletionField);
        taskItemArticle.appendChild(editButton);
    }
}

export default taskEditCollection