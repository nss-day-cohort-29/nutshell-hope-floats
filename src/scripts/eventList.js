import eventsCollection from "./eventsCollection"
import createEvent from "./events"

const eventList = {
    eventify(){
        eventsCollection.getAllEvents()
        .then(allEvents =>{
            let eventDocFragment = document.createDocumentFragment()
            allEvents.forEach(eventItem => {
                let eventHTML = createEvent.eventBuilder(eventItem)
                eventDocFragment.appendChild(eventHTML)
            });
            let outputArticle = document.querySelector(".displayEvents")
            while (outputArticle.firstChild) {
                outputArticle.removeChild(outputArticle.firstChild);
            }
            outputArticle.appendChild(eventDocFragment)

        })
    }
}

export default eventList