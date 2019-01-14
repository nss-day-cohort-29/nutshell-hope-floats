import taskCollection from "./taskCollection"
import taskList from "./taskList"

const taskEditCollection = {
    createAndAppendForm (taskObjectToEdit) {

        let taskNameField = document.createElement("p");

        let taskNameLabel = document.createElement("label");
        taskNameLabel.textContent = "taskName"
        let taskNameInput = document.createElement("input");
        console.log(taskObjectToEdit)
        taskNameInput.value = taskObjectToEdit.task

        taskNameField.appendChild(taskNameLabel);
        taskNameField.appendChild(taskNameInput);

        let taskDateField = document.createElement("h5");

        let taskDateLabel = document.createElement("label");
        taskDateLabel.textContent = "taskDate"
        let taskDateInput = document.createElement("input");
        taskDateInput.value = taskObjectToEdit.date

        taskDateField.appendChild(taskDateLabel);
        taskDateField.appendChild(taskDateInput);

        let taskCompletionField = document.createElement("h5");

        let taskCompletionLabel = document.createElement("label");
        taskCompletionLabel.textContent = "taskCompletionDate"
        let taskCompletionInput = document.createElement("input");
        taskCompletionInput.value = taskObjectToEdit.completionDate

        taskCompletionField.appendChild(taskCompletionLabel);
        taskCompletionField.appendChild(taskCompletionInput);

        let editButton = document.createElement("button");
        editButton.textContent = "Save Task"

        editButton.addEventListener("click", () => {
            let editedTask = {
                name: taskNameInput.value,
                date: taskDateInput.value,
                completionDate: taskCompletionInput.value
            }
            
            taskCollection.editedTask(taskObjectToEdit.id, editedTask)
            .then(response => {
                taskList.taskify()
            })
        })

        let taskItemArticle = document.querySelector(".formTasks")
        while (taskItemArticle.firstChild) {
            taskItemArticle.removeChild(taskItemArticle.firstChild);
        }
        taskItemArticle.appendChild(taskNameField);
        taskItemArticle.appendChild(taskDateField);
        taskItemArticle.appendChild(taskCompletionField);
        taskItemArticle.appendChild(editButton);
    }
}

export default taskEditCollection