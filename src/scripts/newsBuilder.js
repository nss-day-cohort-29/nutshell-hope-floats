const newsBuilder = {
    newsBuilding(){
        let newsTitleField = document.createElement("fieldset")

        let newsTitleLabel = document.createElement("label")
        newsTitleLabel.textContent = "Title Name"
        newsTitleLabel.setAttribute("for", "title__name")
        let newsInputTitle = document.createElement("input");
        newsInputTitle.setAttribute("id", "newsName")
        newsInputTitle.setAttribute("name", "news-name")

        newsTitleField.appendChild(newsTitleLabel)
        newsTitleField.appendChild(newsInputTitle)

        let urlField = document.createElement("fieldset")

        let urlLabel = document.createElement("urlLabel")
        urlLabel.textContent = "URL"
        let newsInputURL = document.createElement("input")
        newsInputURL.setAttribute("id", "url")
        newsInputURL.setAttribute("name", "url")
        
        urlField.appendChild(urlLabel)
        urlField.appendChild(newsInputURL)

        
        let summaryField = document.createElement("fieldset")

        let summaryLabel = document.createElement("summarylabel")
        summaryLabel.textContent = "Summary"

        let newsInputSummary = document.createElement("input")
        newsInputSummary.setAttribute("id", "newsSummary")
        newsInputSummary.setAttribute("name", "news-summary")

        summaryField.appendChild(summaryLabel)
        summaryField.appendChild(newsInputSummary)

        let submitButton = document.createElement("button")
        submitButton.textContent = "Add News"
        submitButton.setAttribute("class", "news-save")

        submitButton.addEventListener("click", this.handleAddNewEvent)

        let newsFormFragment = document.createDocumentFragment()
        newsFormFragment.appendChild(newsInputTitle)
        newsFormFragment.appendChild(newsInputURL)
        newsFormFragment.appendChild(newsInputSummary)
        newsFormFragment.appendChild(submitButton)

        let formArticle = document.querySelector(".News")
        formArticle.appendChild(newsFormFragment)
        return newsInputTitle
    },
    handleAddNewArticle () {
        let inputNewsArticle = document.querySelector("#newsName").value
        let inputNewsURL = document.querySelector("#newsDate").value
        let inputNewsSummary = document.querySelector("#newsLocation").value

        console.log(inputNewsSummary)

        let newEvent = {
            article: inputNewsArticle,
            URL: inputNewsURL,
            summary: inputNewsSummary
        }
        console.log(newEvent)
    }
}

export default newsBuilder

