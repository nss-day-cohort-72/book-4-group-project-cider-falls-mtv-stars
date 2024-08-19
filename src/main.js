//import the HTML display functions to plug into the template literals
import { servicesList } from "./services.js"
import { displayAreas } from "./areas.js"
import { guestList } from "./guests.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <section class="services-container">
        <h2>Services</h2>
        ${servicesList()}
    </section>
    <section class="areas-container">
        <h2>Areas</h2>
        ${displayAreas()}
    </section>
    <section class="guests-container">
        <h2>Guest List</h2>
        ${guestList()}
    </section>
`

mainContainer.innerHTML = applicationHTML