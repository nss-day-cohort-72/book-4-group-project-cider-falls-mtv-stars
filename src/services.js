import { getServices } from "./database.js"

const services = getServices()


// const findCelebrityMatch = (kidObject, celebrityArray) => {
//     let celebrityMatch = null

//     for (const celebrity of celebrityArray) {
//       if(celebrity.id === kidObject.celebrityId ){
//         celebrityMatch = celebrity
//       }
//     }
//     return celebrityMatch
// }

// const findAreaMatch = (service, allAreas) => {
//     let findArea = null
//     for (const area of allAreas) {
//         if(area.id === service.id) {
//             findArea = area
//         }
        
//     }
//     return findArea
// }

document.addEventListener(
    "click",
    (clickEvt) => {
        const clickTarget = clickEvt.target
        if(clickTarget.dataset.type === "services") {
            alert(`${clickTarget.dataset.name}  is available in  ${clickTarget.dataset.serviceareas}`)
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




