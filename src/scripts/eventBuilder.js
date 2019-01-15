import eventsCollection from "./eventsCollection"
import eventList from "./eventList";

const eventBuilder = {
    eventBuilding(){

        let eventHeader = document.createElement("h2");
        eventHeader.textContent = "Events";
        eventHeader.setAttribute("id", "formEvents_id")

        let contactEventField = document.createElement("fieldset")

        let eventNameLabel = document.createElement("label")
        eventNameLabel.setAttribute("for", "event__name")
        let inputEvent = document.createElement("input");
        inputEvent.setAttribute("id", "eventName")
        inputEvent.placeholder= "Event Name"
        inputEvent.setAttribute("name", "Event-name")


        contactEventField.appendChild(eventNameLabel)
        contactEventField.appendChild(inputEvent)

        let dateField = document.createElement("fieldset")

        let dateLabel = document.createElement("label")
        dateLabel.setAttribute("for", "date")
        let inputDate = document.createElement("input")
        inputDate.setAttribute("id", "eventDate")
        inputDate.placeholder= "Date"
        inputDate.setAttribute("name", "event-Date")

        dateField.appendChild(dateLabel)
        dateField.appendChild(inputDate)

        let locationField = document.createElement("fieldset")

        let locationLabel = document.createElement("label")
        locationLabel.setAttribute("for", "location")
        let inputLocation = document.createElement("input")
        inputLocation.setAttribute("id", "eventLocation")
        inputLocation.placeholder= "Location"
        inputLocation.setAttribute("name", "event-location")

        locationField.appendChild(locationLabel)
        locationField.appendChild(inputLocation)

        let submitButton = document.createElement("button")
        submitButton.textContent = "Add Event"
        submitButton.setAttribute("class", "event-save")

        submitButton.addEventListener("click", this.handleAddNewEvent)

        let eventFormFragment = document.createDocumentFragment()
        eventFormFragment.appendChild(eventHeader)
        eventFormFragment.appendChild(contactEventField)
        eventFormFragment.appendChild(dateField)
        eventFormFragment.appendChild(locationField)
        eventFormFragment.appendChild(submitButton)

        let formArticle = document.querySelector(".formEvents")
        formArticle.appendChild(eventFormFragment)
        return inputEvent
    },
    handleAddNewEvent () {
        let inputEventName = document.querySelector("#eventName").value
        let inputEventDate = document.querySelector("#eventDate").value
        let inputEventLocation = document.querySelector("#eventLocation").value

        console.log(inputEventLocation)

        let newEvent = {
            event: inputEventName,
            date: inputEventDate,
            location: inputEventLocation
        }
        eventsCollection.postAllEvents(newEvent)
    .then(response => {
           eventList.eventify()
           console.log(response)
        })
    }
}

export default eventBuilder