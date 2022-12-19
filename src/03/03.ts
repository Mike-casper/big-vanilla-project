import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b:number) =>{
    return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({id:new Date().getTime(),
    title: skill
    })
}

export const makeStudentActive = (s:StudentType) => {
    s.isActive = true
}
// export function makeStudentActive(s:StudentType) {
//     s.isActive = true
// }
export const doesStudentLiveIn=(s:StudentType, cityName:string)=>{
    return s.address.city.title === cityName;
}

export const addMoneyToBudget= (building: GovernmentBuildingType, budget: number)=>{
building.budget += budget;
}
export const  repairHouse = (houseType: HouseType) =>{
    houseType.repaired = true;
}
export function toFireStaff (building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}
export function toHireStaff(ss: GovernmentBuildingType, staffCountToHire: number){
    ss.staffCount += staffCountToHire;
}
export function createMessage(props:CityType){
    // return "Hello " + props.title  + " citizens. I want to you " + props.citizensNumber + " be happy"
    return `Hello ${props.title} citizens. I want to you ${props.citizensNumber} be happy`
}