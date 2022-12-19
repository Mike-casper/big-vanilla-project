export type StudentType = {
    name: string,
    age: number,
    isActive: boolean,
    address:AdressType
    technologies:Array<TechType>
}
type AdressType = {
    streetTitle: string,
    city: LocalCityType,
}
type LocalCityType = {
    title:string
    countryTitle:string
}

type TechType = {
    id: number
    title:string
}

export const student: StudentType = {
    "name": "Mike",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        }
    ]
}
console.log(student.address.city)
console.log(student.technologies[2].id)




