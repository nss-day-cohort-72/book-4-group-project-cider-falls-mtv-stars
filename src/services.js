import { getServices } from "./database.js"
import { getAreas } from "./database.js"
import { getServicesAreasBridge } from "./database.js"

const services = getServices()
const areas = getAreas()
const servicesOfferedAtAreas = getServicesAreasBridge()

document.addEventListener(
    "click",
    (clickEvt) => {
        const clickTarget = clickEvt.target
        if (clickTarget.dataset.type === "services") {
            let servicedAreas = []
            for (const service of servicesOfferedAtAreas) {
                if (service.servicesId === parseInt(clickTarget.dataset.id)) {
                    for (const area of areas) {
                        if (area.id === service.areasId) {
                            servicedAreas.push(area.name)
                        }
                    }
                }
            }
            let sentence = ''
            for (const area of servicedAreas) {
                if (servicedAreas.length === 1) {
                    sentence += area
                } else if (servicedAreas.length === 2) {
                   if (servicedAreas.indexOf(area) === servicedAreas.length - 1) {
                    sentence += ` and ${area}`
                   } else {
                    sentence += area
                   }
                } else if (servicedAreas.indexOf(area) == servicedAreas.length - 1) {
                    sentence += `and ${area}`
                } else {
                    sentence += area + ', '
                }
            }
            window.alert(`${clickTarget.dataset.name} is available in ${sentence}.`)
        }
    }
)

export const servicesList = () => {
    
    let servicesListHTML = "<ul>";

    for (const service of services) {
        const formattedAreas = service.serviceAreas.split(',').map(area => area.trim()).join(', ');
        servicesListHTML += `<li data-type ="services" data-serviceareas="${service.serviceAreas}" data-name="${service.service}" data-id="${service.id}">${service.service}</li>`
        // Convert each service object to an <li> and append to the serviceListHTML string
    }

    servicesListHTML += "</ul>";

    return servicesListHTML
}




