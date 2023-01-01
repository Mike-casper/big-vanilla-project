import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: Array<GovernmentBuildingType>) => {
    return governmentBuildings.map(a => a.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(t => t.address.street.title)
}

// export const createMessages = (houses:Array<HouseType>) => {
//     return houses.map(t=>`Hello guys from ${t.address.street.title}`)
// }

export const createMessages = (houses: Array<HouseType>) => {
    let calbackfn = (t:HouseType)=> {
        return `Hello guys from ${t.address.street.title}`
    }
    let newArray = houses.map(calbackfn)
    return newArray
}




