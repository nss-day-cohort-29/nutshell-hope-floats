import messageCollection from "./messageCollection"

import message from "./message"

const messageList = {
  chatify() {
    messageCollection.getAllmessages()
      .then(allMessages => {

        let messageDocFragment = document.createDocumentFragment()



        allMessages.forEach(chat => {
          let messageHtml = message.messageBuilder(chat)
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