const database = {

areas : [
    { id: 1, name: 'Chamfort River', services: 'rafting, canoeing, fishing' },
    { id: 2, name: 'Lost Wolf Hiking Trail', services: 'hiking, picnicking, rock climbing' },
    { id: 3, name: 'Lodge', services: 'lodging, parking, information, picnicking'},
    { id: 4, name: 'Gander River', services: 'fishing, hiking' },
    { id: 5, name: 'Campgrounds', services: 'information, lodging, parking' },
    { id: 6, name: 'Pine Bluffs Trails', services: 'hiking, picnicking, zip lines' }
  ],

guests : [
    { id: 1, name: 'John Doe', areaID: 1, service: 'Rock Climbing' },
    { id: 2, name: 'Jane Smith', areaID: 1, service: 'Hiking' },
    { id: 3, name: 'Michael Johnson', areaID: 2, service: 'Fishing' },
    { id: 4, name: 'Emily Davis', areaID: 4, service: 'Picnicking' },
    { id: 5, name: 'Chris Brown', areaID: 2, service: 'Information' },
    { id: 6, name: 'Jessica Wilson', areaID: 1, service: 'Lodging' },
    { id: 7, name: 'David Taylor', areaID: 2, service: 'Parking' },
    { id: 8, name: 'Sarah Miller', areaID: 3, service: 'Zip Lining' },
    { id: 9, name: 'James Anderson', areaID: 3, service: 'Canoeing' },
    { id: 10, name: 'Laura Thomas', areaID: 5, service: 'Rafting' },
    { id: 11, name: 'Daniel Lee', areaID: 6, service: 'Hiking' },
    { id: 12, name: 'Sophia Harris', areaID: 4, service: 'Fishing' }
  ],

services : [
    { id: 1, service: 'Rock Climbing', serviceAreas: "Lost Wolf Hiking Trail" },
    { id: 2, service: 'Hiking', serviceAreas: "Lost Wolf Hiking Trail, Gander River, Pine Bluffs Trails" },
    { id: 3, service: 'Fishing', serviceAreas: "Chamfort River, Gander River" },
    { id: 4, service: 'Picnicking', serviceAreas: "Lost Wolf Hiking Trail, Lodge, Pine Bluffs Trails " },
    { id: 5, service: 'Information', serviceAreas: "Lodge, Campgrounds" },
    { id: 6, service: 'Lodging', serviceAreas: "Lodge, Campgrounds" },
    { id: 7, service: 'Parking', serviceAreas: "Lodge, Campgrounds" },
    { id: 8, service: 'Zip Lining', serviceAreas: "Pine Bluffs Trails" },
    { id: 9, service: 'Canoeing', serviceAreas: "Chamfort River" },
    { id: 10, service: 'Rafting', serviceAreas: "Chamfort River" }
  ]

}

export const getAreas = () => {
    return database.areas.map(areas => ({...areas}))
}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}

export const getServices = () => {
    return database.services.map(services => ({...services}))
}
