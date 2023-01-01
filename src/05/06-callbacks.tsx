import React, {MouseEvent, ChangeEvent} from "react";

// const callback =()=>{
//     alert("hey")
// }
// window.setTimeout(callback, 1000);

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.value)

        // alert("user should be delete")
    }
    const saveUser = () => {
        alert("User have been saved")
    }
    const nameChanged = () => {
        console.log("name changed")
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }
    const onAgeChanged = (e:ChangeEvent<HTMLInputElement>)=>{
        console.log("age changed: " + e.currentTarget.value)
    }

    return <div><textarea onChange={nameChanged} onBlur={focusLostHandler}>Dima</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" onClick={deleteUser}>search</button>
        {/*<button name="save" onClick={deleteUser}>X</button>*/}
    </div>
}