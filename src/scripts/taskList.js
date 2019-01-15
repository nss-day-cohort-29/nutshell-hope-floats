import tasks from "./task"
import taskCollection from "./taskCollection";

const taskList = {
    taskify() {

        taskCollection.getAllTasks()
            .then(allTasks => {

                let taskDocFragment = document.createDocumentFragment()

                allTasks.forEach(taskItem => {
                    let taskHtml = tasks.taskBuilder(taskItem);
                    taskDocFragment.appendChild(taskHtml)

                });

                let outputArticle = document.querySelector(".displayTasks")
                while (outputArticle.firstChild) {
                    outputArticle.removeChild(outputArticle.firstChild);
                }
                outputArticle.appendChild(taskDocFragment);
            });
    }
}

export default taskList