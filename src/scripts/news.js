import newsCollection from "./newsCollection"
import newsList from "./newsList";
import newsEditForm from "./newsEditForm";

const createNewsArticle = {
        
        newsBuilder(newsObject){
            let newsArticle = document.createElement("article");
    
            let horizontalLine = document.createElement("hr");
    
            let newsTitle = document.createElement("h3")
            newsTitle.textContent = newsObject.title;
    
            let newsUrl = document.createElement("section")
            newsUrl.textContent = newsObject.url;
    
            let newsSynopsis = document.createElement("section")
            newsSynopsis.textContent = newsObject.synopsis

            let editButton = document.createElement("button")
            editButton.textContent = "Edit News"
            editButton.setAttribute("id", `editNews--${newsObject.id}`)
            editButton.addEventListener("click", () => {
            let articleID = news.target.id
            console.log(articleID)
            let newsId = articleID.split("--")[1]
            console.log(newsId)
            eventsCollection.getEvent(newsId)
            .then(response => {
            newsEditForm.createAndAppendForm(response)
            })
            })

            let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete News"
        deleteButton.setAttribute("id", `deleteNews--${newsObject.id}`)
        deleteButton.addEventListener("click", () => {
            console.log(news)
            let newsId = news.target.id.split("--")[1]
    newsCollection.deleteNews(newsId)
    .then(response => {
           newsList.newsify()
           console.log(response)
        })
    })

        newsArticle.appendChild(newsTitle)
        newsArticle.appendChild(newsUrl)
        newsArticle.appendChild(newsSynopsis)
        newsArticle.appendChild(deleteButton)
        newsArticle.appendChild(editButton)
        newsArticle.appendChild(horizontalLine)

        return newsArticle
    }
}

export default createNewsArticle