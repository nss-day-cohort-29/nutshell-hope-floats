const eventsCollection = {

    getAllEvents (){
        return fetch("http://localhost:8088/Events")
        .then(response => response.json())
    },
    postAllEvents(newEventToSave){
       return fetch("http://localhost:8088/Events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify(newEventToSave)
    })
    // location.reload(true);
  },
  deleteEvents(eventId){
    return fetch(`http://localhost:8088/Events/${eventId}`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json"
   }
  })
 },

    getEvent(eventId){
        return fetch(`http://localhost:8088/Events/${eventId}`)
        .then(response => response.json())
    },
    editEvent(eventId, eventToEdit) {
        return fetch(`http://localhost:8088/Events/${eventId}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify(eventToEdit)
  })
},
}

export default eventsCollection