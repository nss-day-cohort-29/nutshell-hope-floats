import messageCollection from "./messageCollection"
import messageForm from "./messageForm"
import messageList from "./messageList"

const messageEditForm = {
  
  createAndAppendForm (articleId, messageObjToEdit) {

    
    let messageNameField = document.createElement("p")

    let messageNameLabel = document.createElement("label")
    messageNameLabel.textContent = "Sender  "
    let messageNameInput = document.createElement("input")
    messageNameInput.value = messageObjToEdit.SenderName

    messageNameField.appendChild(messageNameLabel)
    messageNameField.appendChild(messageNameInput)

    let messageInputField = document.createElement("p")

    let messageInputLabel = document.createElement("label")
    messageInputLabel.textContent = "Edit Message  "
    let messageContentInput = document.createElement("textarea")
    messageContentInput.value = messageObjToEdit.Message

    messageInputField.appendChild(messageInputLabel)
    messageInputField.appendChild(messageContentInput)
   
    let hroizontalRule  = document.createElement("hr")
    // let dateField = document.createElement("p")

    // let dateLabel = document.createElement("label")
    // dateLabel.textContent = " date"
    // let dateInput = document.createElement("p")
    // dateInput.value = messageObjToEdit.Date

    // dateField.appendChild(dateLabel)
    // dateField.appendChild(dateInput)

    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"

    
    updateButton.addEventListener("click", () => {
      let editedMessage = {
        SenderName: messageNameInput.value,
        Message: messageContentInput.value,
        Date: messageForm.getTimeStamp()
      }
      
      messageCollection.putExistingMessage(messageObjToEdit.id, editedMessage)
      .then(response => {
        messageList.chatify()
      })
    })

    
    let messageItemArticle = document.querySelector(`#${articleId}`)

    
    while (messageItemArticle.firstChild) {
      messageItemArticle.removeChild(messageItemArticle.firstChild);
    }
    messageItemArticle.appendChild(messageNameField)
    messageItemArticle.appendChild(messageInputField)
    // messageItemArticle.appendChild(dateField)
    messageItemArticle.appendChild(updateButton)
    messageItemArticle.appendChild(hroizontalRule)
  }
}
export default messageEditForm