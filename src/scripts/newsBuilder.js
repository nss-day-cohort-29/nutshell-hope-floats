import newsCollection from "./newsCollection"
import newsList from "./newsList";

const newsBuilder = {
    newsBuilding(){
        console.log("newsbuilder-running")
        
        let newsField = document.createElement("fieldset")

        let newsTitleLabel = document.createElement("articleLabel")
        newsTitleLabel.setAttribute("for", "title__name")
        let newsInputTitle = document.createElement("input");
        newsInputTitle.setAttribute("id", "newsName")
        newsInputTitle.placeholder = "Article Title"
        newsInputTitle.setAttribute("name", "news-name")

        newsField.appendChild(newsTitleLabel)
        newsField.appendChild(newsInputTitle) 

        let urlField = document.createElement("fieldset")

        let urlLabel = document.createElement("urlLabel")
        let newsInputURL = document.createElement("input")
        newsInputURL.setAttribute("id", "url")
        newsInputURL.placeholder = "Article URL"
        newsInputURL.setAttribute("name", "url")
        
        urlField.appendChild(urlLabel)
        urlField.appendChild(newsInputURL)

        
        let summaryField = document.createElement("fieldset")

        let summaryLabel = document.createElement("summarylabel")

        let newsInputSummary = document.createElement("input")
        newsInputSummary.setAttribute("id", "newsSummary")
        newsInputSummary.placeholder = "Synopsis"
        newsInputSummary.setAttribute("name", "news-summary")

        summaryField.appendChild(summaryLabel)
        summaryField.appendChild(newsInputSummary)

        let submitButton = document.createElement("button")
        submitButton.textContent = "Add News"
        submitButton.setAttribute("class", "news-save")

        submitButton.addEventListener("click", this.handleAddNewArticle)

        let newsFormFragment = document.createDocumentFragment()
        newsFormFragment.appendChild(newsField)
        newsFormFragment.appendChild(urlField)
        newsFormFragment.appendChild(summaryField)
        newsFormFragment.appendChild(submitButton)

        let formArticle = document.querySelector(".News")
        formArticle.appendChild(newsFormFragment)
        return newsInputTitle
    },
    

    getTimeStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + '/' +
          (now.getDate()) + '/' +
          now.getFullYear() + " " +
          now.getHours() + ':' +
          ((now.getMinutes() < 10)
            ? ("0" + now.getMinutes())
            : (now.getMinutes())) + ':' +
     
          ((now.getSeconds() < 10)
            ? ("0" + now.getSeconds())
            : (now.getSeconds())));
      },

    handleAddNewArticle () { console.log()
        let inputNewsArticle = document.querySelector("#newsName").value
        let inputNewsURL = document.querySelector("#url").value
        let inputNewsSummary = document.querySelector("#newsSummary").value
        let articleDate = newsBuilder.getTimeStamp()

        console.log(inputNewsSummary)

        let newArticle = {
            article: inputNewsArticle,
            URL: inputNewsURL,
            summary: inputNewsSummary,
            date: articleDate
        }
        newsCollection.postAllNews(newArticle)
        .then(() => {
          newsList.newsify()
        })
      }
    }
    
    export default newsBuilder




