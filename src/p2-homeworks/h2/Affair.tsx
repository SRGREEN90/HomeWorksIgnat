import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div className={style.someClass}>
            <span className={style.some}>
                {props.affair.name}
            </span>

            <span>
                <button onClick={deleteCallback}>X</button>
            </span>

        </div>
    )
}

export default Affair
