import React, {useState} from "react"

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string; name?:string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}
// export const ManComponent: React.FC<PropsType> = (props) => {
// const {title, man, ...restProps} = props;
// // const {title} = props;
// // const {name}=props.man
//     return <div>
//         <h1>{title}</h1>
//         <hr/>
//         <div>
//             {props.man.name}
//             {props.car.model}
//         </div>
//     </div>
// }
const useStateDimych=(m:string)=>{
    return [m, ()=>{}]
}
const useStateDimych2=(m:string)=>{
    return {
        message:m,
        setMessage:()=>{}
    }
}
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    const [message, setMessage] = useStateDimych("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
            {props.car.model}
        </div>
    </div>
}