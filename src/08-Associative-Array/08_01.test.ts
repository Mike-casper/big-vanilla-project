// import {usersObj} from "./08-array";
type UsersType = {
    [key: string] : {id:number, name:string}
}
let users: UsersType

beforeEach(()=>{
users = {
    "101": {id: 101, name: "Dima"},
    "2222": {id: 2222, name: "Kate"},
    "1021": {id: 1021, name: "Dara"},
    "1101": {id: 1101, name: "Anna"},
}

})

test("should select corresponding user from obj",()=>{
    users["101"].name = "D"
    expect(users["101"].name).toBe("D");
    expect(users["2222"]).toEqual({id: 2222, name: "Kate"});
    expect(users["1021"]).toEqual({id: 1021, name: "Dara"});
    expect(users["1101"]).toEqual({id: 1101, name: "Anna"});
})

test("should delete corresponding user from obj",()=>{
    delete users["101"]
    expect(users["101"]).toBeUndefined();
})


