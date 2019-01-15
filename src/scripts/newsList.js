import newsCollection from "./newsCollection"
import createNewsArticle from "./news"

const newsList = {
    newsify () {
        newsCollection.getAllNews()
        .then(allNews => {

            let newsDocFragment = document.createDocumentFragment();

            allNews.forEach(newsItem => {
                let newsHTML = createNewsArticle.newsBuilder(newsItem)
                newsDocFragment.appendChild(newsHTML)
            })

            let outputArticle = document.querySelector(".displayNews")
            while (outputArticle.firstChild) {
                outputArticle.removeChild(outputArticle.firstChild);
            }
            outputArticle.appendChild(newsDocFragment)

        })
    }
}

export default newsList