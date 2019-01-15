import eventsCollection from "./eventsCollection"
import createEvent from "./events"

const eventList = {
    eventify(){
        eventsCollection.getAllEvents()
        .then(allEvents =>{
            allEvents.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(a.date) - new Date(b.date);
              });
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