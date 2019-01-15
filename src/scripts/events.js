import eventsCollection from "./eventsCollection";
import eventList from "./eventList";
import eventEditForm from "./editForm";

const createEvent = {
    eventBuilder(eventObject){
        let eventArticle = document.createElement("fieldset");

        let eventName = document.createElement("h3")
        eventName.textContent = eventObject.event;

        let eventDate = document.createElement("section")
        eventDate.textContent = eventObject.date;

        let eventLocation = document.createElement("section")
        eventLocation.textContent = eventObject.location

        let editButton = document.createElement("button")
        editButton.textContent = "Edit Event"
        editButton.setAttribute("id", `editEvent--${eventObject.id}`)
        editButton.addEventListener("click", () => {
        let articleID = event.target.id
        console.log(articleID)
        let eventId = articleID.split("--")[1]
        console.log(eventId)
    eventsCollection.getEvent(eventId)
    .then(response => {
        eventEditForm.createAndAppendForm(response)
        })
    })

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete Event"
        deleteButton.setAttribute("id", `deleteEvent--${eventObject.id}`)
        deleteButton.addEventListener("click", () => {
            console.log(event)
            let eventId = event.target.id.split("--")[1]
    eventsCollection.deleteEvents(eventId)
    .then(response => {
           eventList.eventify()
           console.log(response)
        })
    })

        eventArticle.appendChild(eventName)
        eventArticle.appendChild(eventDate)
        eventArticle.appendChild(eventLocation)
        eventArticle.appendChild(deleteButton)
        eventArticle.appendChild(editButton)

        return eventArticle
    }
}

export default createEvent