import messageCollection from "./messageCollection"
import messageForm from "./messageForm"
import message from "./message"

const messageList = {
  chatify() {
    messageCollection.getAllmessages()
      .then(allMessages => {

        let messageDocFragment = document.createDocumentFragment()



        allMessages.forEach(chat => {
          
          
          let messageHtml = message.messageBuilder(chat)

          
          // messageHtml.style.color = messageForm.color()
          // let colorArray = ["red","green","blue","yellow","orange"]
          // for(i=0;i < colorArray.length;i++){
            // let eachColorArticle = document.getElementsByClassName(messageArticle)
            // messageHtml += messageHtml.classList.add(colorArray[i])
            // eachColorArticle.classList.add()
            // chat.setAttribute("clas" += colorArray[i])
            // messageArticle.setAttribute("class", "messageArticle")
            // messageArticle.classList.add()
          // }
          // console.log(colorArray)
          messageDocFragment.appendChild(messageHtml)
        })


        let displayArticle = document.querySelector(".displayMessages")
        while (displayArticle.firstChild) {
          displayArticle.removeChild(displayArticle.firstChild);
        }
        displayArticle.appendChild(messageDocFragment)

      })
  }
}

export default messageList