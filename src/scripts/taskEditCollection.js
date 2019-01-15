import taskCollection from "./taskCollection"
import taskList from "./taskList"

const taskEditCollection = {
    createAndAppendForm (taskObjectToEdit) {

        let taskEditField = document.createElement("fieldset");

        let taskEditOutput = document.createElement("p");

        let taskEditLabel = document.createElement("label");
        taskEditLabel.textContent = "taskName"
        let taskEditInput = document.createElement("input");
        // console.log(taskObjectToEdit)
        taskEditInput.value = taskObjectToEdit.taskName

        taskEditField.appendChild(taskEditLabel);
        taskEditField.appendChild(taskEditInput);

        // let taskDateField = document.createElement("h5");

        // let taskDateLabel = document.createElement("label");
        // taskDateLabel.textContent = "taskDate"
        // let taskDateInput = document.createElement("input");
        // taskDateInput.value = taskObjectToEdit.date

        // taskDateField.appendChild(taskDateLabel);
        // taskDateField.appendChild(taskDateInput);

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
                // date: taskDateInput.value,
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
        // taskItemArticle.appendChild(taskDateField);
        taskItemArticle.appendChild(taskCompletionField);
        taskItemArticle.appendChild(editButton);
        taskItemArticle.appendChild(taskCompletionCheck);
    }
}

export default taskEditCollection