import { getServices } from "./database.js"

const services = getServices()

export const servicesList = () => {
    
    let servicesListHTML = "<ul>";

    for (const service of services) {
        servicesListHTML += `<li data-type ="services" data-id="${service.id}">${service.service}</li>`
        // Convert each service object to an <li> and append to the serviceListHTML string
    }

    servicesListHTML += "</ul>";

    return servicesListHTML
}