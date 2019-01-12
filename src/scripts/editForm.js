import eventsCollection from "./eventsCollection"
import eventList from "./eventList"

const eventEditForm = {
    createAndAppendForm (eventToEdit) {
        let eventNameField = document.createElement("p")
        let eventNameLabels = document.createElement("label")
        eventNameLabels.textContent = "Events"
        let eventNameInput = document.createElement("input")
        eventNameInput.value = eventToEdit.event

        eventNameField.appendChild(eventNameLabels)
        eventNameField.appendChild(eventNameInput)

        let eventDateField = document.createElement("p")
        let eventDateNameLabel = document.createElement("label")
        eventDateNameLabel.textContent = "Date"
        let eventDateNameInput = document.createElement("input")
        eventDateNameInput.value = eventToEdit.date

        eventDateField.appendChild(eventDateNameLabel)
        eventDateField.appendChild(eventDateNameInput)

        let eventLocationField = document.createElement("p")
        let eventLocationNameLabel = document.createElement("label")
        eventLocationNameLabel.textContent = "Location"
        let eventLocationNameInput = document.createElement("input")
        eventLocationNameInput.value = eventToEdit.location

        eventLocationField.appendChild(eventLocationNameLabel)
        eventLocationField.appendChild(eventLocationNameInput)

        let updateButton = document.createElement("button")
        updateButton.textContent = "Update"

        updateButton.addEventListener("click", () => {
            let editedEvents = {
                event: eventNameInput.value,
                date: eventDateNameInput.value,
                location: eventLocationNameInput.value
            }
            eventsCollection.editEvent(eventToEdit.id, editedEvents)
            .then(response => {
                eventList.eventify()
                console.log(response)

                let eventItemArticle = document.querySelector(".displayEditEvents")
                eventItemArticle.innerHTML = ""
            })
        })
        let eventItemArticle = document.querySelector(".displayEditEvents")

        // while (eventItemArticle.firstChild) {
        //     eventItemArticle.removeChild(eventItemArticle.firstChild)
        // }

        eventItemArticle.innerHTML = "",
        eventItemArticle.appendChild(eventNameField)
        eventItemArticle.appendChild(eventDateField)
        eventItemArticle.appendChild(eventLocationField)
        eventItemArticle.appendChild(updateButton)
    }
}
export default eventEditForm












