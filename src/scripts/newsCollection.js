const newsCollection = {

    getAllNews (){
        return fetch("http://localhost:8088/News")
        .then(response => response.json())
    },
    postAllNews(newArticleToSave){
       return fetch("http://localhost:8088/News", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify(newArticleToSave)
    })
},

getNews(newsId){
    return fetch(`http://localhost:8088/News/${newsId}`)
    .then(response => response.json())
},
editNews(newsId, newsToEdit) {
    return fetch(`http://localhost:8088/News/${newsId}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
},
body: JSON.stringify(newsToEdit)
})
}
}

export default newsCollection