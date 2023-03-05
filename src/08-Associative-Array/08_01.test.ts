import {usersObj} from "./08-array";


beforeEach(()=>{


})

test("should select corresponding user from obj",()=>{
    expect(usersObj[0]).toBe("Dima");
    expect(usersObj[0]).toBe("Nata");
    expect(usersObj[0]).toBe("Dara");
    expect(usersObj[0]).toBe("Kate");
})