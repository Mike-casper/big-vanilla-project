import {logDOM} from "@testing-library/react";

export const usersObj = {
    "0": "Dimych",
    "1": "Margo",
    "2": "Nata",
    "3": "Kate",
}
type UsersType = {
    [key: string] : {id:number, name:string}
}

export const users:UsersType = {
    "101": {id: 101, name: "Dima"},
    "2222": {id: 2222, name: "Kate"},
    "1021": {id: 1021, name: "Dara"},
    "1101": {id: 1101, name: "Anna"},
}

// users[1101]
let user = {id:100500, name: "Igor"}
users[user.id] = user;
delete users[user.id]
console.log(users)
users[user.id].name = "Vitya"

export const usersArray = [
    {id: 101, name: "Dima"},
    {id: 2222, name: "Kate"},
    {id: 1021, name: "Dara"},
    {id: 1101, name: "Anna"}
    ]

// usersArray.find(u=>u.id === 1)
