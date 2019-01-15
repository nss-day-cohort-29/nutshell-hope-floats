const messageCollection = {

  getAllmessages() {
    return fetch("http://localhost:8088/Messages")
      .then(response => response.json())
  },

  postNewMessage(newMessageToSave) {
    
    return fetch("http://localhost:8088/Messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessageToSave)
    })
  },
  
  deleteMessage(messageId) {
    return fetch(`http://localhost:8088/Messages/${messageId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  
  getMessage(messageId) {
    return fetch(`http://localhost:8088/Messages/${messageId}`)
      .then(response => response.json())
  },
  putExistingMessage(messageId, messageToEdit) {
    return fetch(`http://localhost:8088/Messages/${messageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageToEdit)
    })
  }
}

export default messageCollection