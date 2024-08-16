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
            window.alert(`There are ${guestAmount} guests in this area`)
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
        >${area.name}: supports ${area.services}
        </li>
        `
    }
    html += `</ul>`
    return html
}