import taskCollection from "./taskCollection";
import taskList from "./taskList";
import tasks from "./task";

const taskBuilder = {
    taskBuilding() {
        let taskNameField = document.createElement("fieldset");

        let taskNameLabel = document.createElement("label");
        let taskName = document.createElement("input");
        taskName.setAttribute("id", "taskName");
        taskName.placeholder = "Input New Task";
        taskName.setAttribute("name", "task-name");

        taskNameField.appendChild(taskNameLabel);
        taskNameField.appendChild(taskName);

        let taskDateField = document.createElement("fieldset");

        let taskDateLabel = document.createElement("label");
        let taskDate = document.createElement("input");
        taskDate.setAttribute("id", "taskDate");
        taskDate.placeholder = "Date of Task";
        taskDate.setAttribute("name", "task-date");

        taskDateField.appendChild(taskDateLabel);
        taskDateField.appendChild(taskDate);

        let taskCompleteField = document.createElement("fieldset");

        let taskCompleteLabel = document.createElement("label");
        let taskCompletionDate = document.createElement("input");
        taskCompletionDate.setAttribute("id", "taskCompletionDate");
        taskCompletionDate.placeholder = "Completion date of Task";
        taskCompletionDate.setAttribute("id", "task-Completion");

        taskCompleteField.appendChild(taskCompleteLabel);
        taskCompleteField.appendChild(taskCompletionDate);

        let submitButton = document.createElement("button");
        submitButton.textContent = "Add Task"
        submitButton.setAttribute("class", "task-save");

        submitButton.addEventListener("click", this.handleNewTask)

        let taskFormFragment = document.createDocumentFragment()
        taskFormFragment.appendChild(taskNameField);
        taskFormFragment.appendChild(taskDateField);
        taskFormFragment.appendChild(taskCompleteField);
        taskFormFragment.appendChild(submitButton);

        let formArticle = document.querySelector(".formTasks");
        formArticle.appendChild(taskFormFragment)
        // return taskBuilder
    },
    handleNewTask() {

        let inputTaskName = document.querySelector("#taskName").value
        let taskDate = document.querySelector("#taskDate").value
        let inputCompletionDate = document.querySelector("#task-Completion").value

        let newTask = {
            task: inputTaskName,
            date: taskDate,
            completionDate: inputCompletionDate
        }

        taskCollection.postNewTask(newTask)
        .then(response => response.json())
        .then(newTaskObject => {
            taskList.taskify()
        })
    }
}


export default taskBuilder

// taskCreationDate for created date
// taskDueDate for date task is due