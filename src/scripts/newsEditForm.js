import newsCollection from "./newsCollection"
import newsList from "./newsList"

const newsEditForm = {
    createAndAppendForm (newsToEdit) {
        let newsTitleField = document.createElement("p")
        let newsTitleLabels = document.createElement("label")
        newsTitleLabels.textContent = "News"
        let newsTitleInput = document.createElement("input")
        newsTitleInput.value = newsToEdit.title

        newsTitleField.appendChild(newsTitleLabels)
        newsTitleField.appendChild(newsTitleInput)

        let newsUrlField = document.createElement("p")
        let newsUrlLabel = document.createElement("label")
        newsUrlLabel.textContent = "Url"
        let newsUrlInput = document.createElement("input")
        newsUrlInput.value = newsToEdit.url

        newsUrlField.appendChild(newsUrlLabel)
        newsUrlField.appendChild(newsUrlInput)

        let newsSummaryField = document.createElement("p")
        let newsSummaryLabel = document.createElement("label")
        newsSummaryLabel.textContent = "Synopsis"
        let newsSummaryInput = document.createElement("input")
        newsSummaryInput.value = newsToEdit.summary

        newsSummaryField.appendChild(newsSummaryLabel)
        newsSummaryField.appendChild(newsSummaryInput)

        let updateButton = document.createElement("button")
        updateButton.textContent = "Update"

        updateButton.addEventListener("click", () => {
            let editedNews = {
                title: newsTitleInput.value,
                url: newsUrlInput.value,
                synopsis: newsSummaryInput.value
            }
            newsCollection.editNews(newsToEdit.id, editedNews)
            .then(response => {
                newsList.newsify()
                console.log(response)

                let newsItemArticle = document.querySelector(".displayEditNews")
                newsItemArticle.innerHTML = ""
            })
        })
        let newsItemArticle = document.querySelector(".displayEditEvents")

        // while (eventItemArticle.firstChild) {
        //     eventItemArticle.removeChild(eventItemArticle.firstChild)
        // }

        newsItemArticle.innerHTML = "",
        newsItemArticle.appendChild(newsTitleField)
        newsItemArticle.appendChild(newsUrlField)
        newsItemArticle.appendChild(newsSummaryField)
        newsItemArticle.appendChild(updateButton)
    }
}
export default newsEditForm












