import messageCollection from "./messageCollection"
import messageList from "./messageList"
import messageEditForm from "./messageEditForm"
const message = {
  
 messageBuilder(messageObject) {
    let messageArticle = document.createElement("article")
    
    messageArticle.setAttribute("id", `message--${messageObject.id}`)
    messageArticle.setAttribute("class", "messageArticle")
    
    let messageName = document.createElement("h3")
    messageName.textContent = messageObject.SenderName

    let messageContent = document.createElement("p")
    messageContent.textContent = messageObject.Message

    let date = document.createElement("p")
    date.textContent = messageObject.Date

    
    let editMessageButton = document.createElement("button")
    editMessageButton.textContent = "Edit"
    editMessageButton.addEventListener("click", () => {
      let articleId = event.target.parentNode.id
      let messageId = articleId.split("--")[1]
      messageCollection.getMessage(messageId)
      .then(response => {
        messageEditForm.createAndAppendForm(articleId, response)
      })
    })

    
    let deleteMessageButton = document.createElement("button")
    deleteMessageButton.textContent = "Delete"
    deleteMessageButton.addEventListener("click", () => {
      let messageId = event.target.parentNode.id.split("--")[1]
      messageCollection.deleteMessage(messageId)
      .then(response => {
        messageList.chatify()
      })
    })

    let horizontalRule = document.createElement("hr")

    messageArticle.appendChild(messageName)
    messageArticle.appendChild(messageContent)
    messageArticle.appendChild(date)
    messageArticle.appendChild(editMessageButton)
    messageArticle.appendChild(deleteMessageButton)
    messageArticle.appendChild(horizontalRule)

    return messageArticle
  }
}

export default message