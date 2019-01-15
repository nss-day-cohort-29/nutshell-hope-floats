
import messageCollection from "./messageCollection"
import messageList from "./messageList"

const messageForm = {
  
  clearInputForm(){
  document.querySelector("#message__name").value = ""
  document.querySelector("#message__content"). value = ""
},

createAndAppendForm() {
    
    let formHeader = document.createElement("h2")
    formHeader.textContent = "   Welcome To Chat Box"
    formHeader.setAttribute("id", "formHeader_id")


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

    // let messageDateField = document.createElement("fieldset")


    // let messageDateLabel = document.createElement("label")
    // messageDateLabel.textContent = "Date "
    // messageDateLabel.setAttribute("for", "message__date")
    // let messageDateInput = document.createElement("p")
    // messageDateInput.setAttribute("id", "date__input")
    // messageDateInput.setAttribute("name", "date__input")

    // messageDateField.appendChild(messageDateLabel)
    // messageDateField.appendChild(messageDateInput)

    let submitButton = document.createElement("button")
    submitButton.textContent = "Send"
    submitButton.setAttribute("class", "message__send")

    submitButton.addEventListener("click", this.handleAddNewMessage)


    let messageFormFragment = document.createDocumentFragment()
    messageFormFragment.appendChild(formHeader)
    messageFormFragment.appendChild(messageNameField)
    messageFormFragment.appendChild(messageInputField)
    // messageFormFragment.appendChild(messageDateField)
    messageFormFragment.appendChild(submitButton)


    let formArticle = document.querySelector(".formMessages")
    formArticle.appendChild(messageFormFragment)

  },
  getTimeStamp() {
    var now = new Date();
    return ((now.getMonth() + 1) + "/" +
      (now.getDate()) +"/" +
      now.getFullYear() + " " +
      now.getHours() + ":" +
      ((now.getMinutes() < 10)
        ? ("0" + now.getMinutes())
        : (now.getMinutes())) + ":" +

      ((now.getSeconds() < 10)
        ? ("0" + now.getSeconds())
        : (now.getSeconds())));
  },
//   color(){
//     let colorArray = ["red","green","blue","yellow","orange"]
//   for(i=0;i < colorArray.length;i++){
//     colorArray[i]
//   }
// },



  handleAddNewMessage() {

    let inputMessageName = document.querySelector("#message__name")
    let inputMessageContent = document.querySelector("#message__content")
    let inputMessageDate = messageForm.getTimeStamp()





    let newMessage = {
      SenderName: inputMessageName.value,
      Message: inputMessageContent.value,
      Date: inputMessageDate
    }

    messageCollection.postNewMessage(newMessage)
      .then(reponse => {

        messageList.chatify()
    
        messageForm.clearInputForm()
        })


  }
  


}

export default messageForm