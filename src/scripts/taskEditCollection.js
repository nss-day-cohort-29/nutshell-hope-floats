import taskCollection from "./taskCollection"
import taskList from "./taskList"

const taskEditCollection = {
    createAndAppendForm (articleId, taskObjectToEdit) {

        let taskNameField = document.createElement("p");

        let taskNameLabel = document.createElement("label");
        taskNameLabel.textContent = "taskName"
        let taskNameInput = document.createElement("input");
        taskNameInput.value = taskObjectToEdit.name

        taskNameField.appendChild(taskNameLabel);
        taskNameField.appendChild(taskNameInput);

        let taskDateField = document.createElement("h5");

        taskDateLabel = document.createElement("label");
        taskDateLabel.textContent = "taskDate"
        let taskDateInput = document.createElement("input");
        taskDateInput.textContent = taskObjectToEdit.date

        taskDateField.appendChild(taskDateLabel);
        taskDateField.appendChild(taskDateInput);

        let taskCompletionField = document.createElement("h5");

        taskCompletionLabel = document.createElement("label");
        taskCompletionLabel.textContent = "taskCompletionDate"
        let taskCompletionInput = document.createElement("input");
        taskCompletionInput.textContent = taskObjectToEdit.completionDate

        taskCompletionField.appendChild(taskCompletionLabel);
        taskCompletionField.appendChild(taskCompletionInput);

        let editButton = document.createElement("button");
        editButton.textContent = "Edit Task"

        editButton.addEventListener("click", () => {
            let editedTask = {
                name: inputTaskName.value,
                date: taskDate.value,
                completionDate: inputCompleteDate.value
            }
            
            taskCollection.putExistingTask(taskObjectToEdit.id, editedTask)
            .then(response => {
                taskList.taskify()
            })
        })

        let taskItemArticle = document.querySelector(`${articleId}`)
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