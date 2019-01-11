import messageCollection from "./messageCollection"
import messageList from "./messageList"
const messageForm = {
  createAndAppendForm() {

    function getTimeStamp() {
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
  }

    let formHeader = document.createElement("h2")
    formHeader.textContent = "   Welcome To Chat Box"


    let messageNameField = document.createElement("fieldset")
    let messageNameLabel = document.createElement("label")
    messageNameLabel.textContent = "Sender's Name "
    messageNameLabel.setAttribute("for", "message__name")
    let messageNameInput = document.createElement("input")
    messageNameInput.setAttribute("id", "message__name")
    messageNameInput.setAttribute("name", "message__name")

    messageNameField.appendChild(messageNameLabel)
    messageNameField.appendChild(messageNameInput)

    let messageInputField = document.createElement("fieldset")

    let messageInputLabel = document.createElement("label")
    messageInputLabel.textContent = "Your Message "
    messageInputLabel.setAttribute("for", "message__content")
    let messageInputBox = document.createElement("textarea")
    messageInputBox.setAttribute("id", "message__content")
    messageInputBox.setAttribute("name", "message__content")

    messageInputField.appendChild(messageInputLabel)
    messageInputField.appendChild(messageInputBox)

    let messageDateField = document.createElement("fieldset")
    

    let messageDateLabel = document.createElement("label")
    messageDateLabel.textContent = "Date "
    messageDateLabel.setAttribute("for", "message__date")
    let messageDateInput = document.createElement("input")
    messageDateInput.setAttribute("id", "date__input")
    messageDateInput.setAttribute("name", "date__input")

    messageDateField.appendChild(messageDateLabel)
    messageDateField.appendChild(messageDateInput)

    let submitButton = document.createElement("button")
    submitButton.textContent = "Send"
    submitButton.setAttribute("class", "message__send")

    submitButton.addEventListener("click", this.handleAddNewMessage)


    let messageFormFragment = document.createDocumentFragment()
    messageFormFragment.appendChild(formHeader)
    messageFormFragment.appendChild(messageNameField)
    messageFormFragment.appendChild(messageInputField)
    messageFormFragment.appendChild(messageDateField)
    messageFormFragment.appendChild(submitButton)


    let formArticle = document.querySelector(".formMessages")
    formArticle.appendChild(messageFormFragment)

  },
  

  handleAddNewMessage(event) {

    let inputMessageName = document.querySelector("#message__name").value
    let inputMessageContent = document.querySelector("#message__content").value
    let inputMessageDate = document.querySelector("#date__input").value



    let newMessage = {
      SenderName: inputMessageName,
      Message: inputMessageContent,
      Date: inputMessageDate
    }

    messageCollection.postNewMessage(newMessage)
    // .then(reponse => {
    messageList.chatify()
    // })
  }
}

export default messageForm