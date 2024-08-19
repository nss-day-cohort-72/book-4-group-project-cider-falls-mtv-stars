import { getAreas } from "./database.js"
import { getGuests } from "./database.js"

const areas = getAreas()
const guests = getGuests()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === 'area') {
            let guestAmount = 0
            for (const guest of guests) {
                if (guest.areaID === parseInt(clickTarget.dataset.id)) {
                    guestAmount++
                }
            }
            //Variable to store string formatted for only 1 guest in the area
            let singleGuest = `There is ${guestAmount} guest in this area.`
            //Variable to store string formatted for 0 or multiple guests in the area
            let multipleOrZeroGuests = `There are ${guestAmount} guests in this area.`
            if (guestAmount != 1) {
                //If guests amount is not 1, display multiple guests string
                window.alert(`${multipleOrZeroGuests}`)
            } else {
                //If guests amount is 1, display single guest string
                window.alert(`${singleGuest}`)
            }
        }
    }
)

export const displayAreas = () => {
    let html = `<ul>`
    console.log(areas)
    for (const area of areas) {
        console.log(area)
        html += `
        <li 
        data-type="area"
        data-id="${area.id}"
        class="area-details"
        >${area.name}:<br> Supports ${area.services}
        </li>
        `
    }
    html += `</ul>`
    return html
}