import React, {ChangeEvent, useState} from "react";
import s from './HW13.module.css'
import {RequestAPI} from "./bll/RequestAPI";


function Request () {
    const [checked, setChecked] = useState(false)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
        setChecked(e.currentTarget.checked)
    }

    const onClickHandler = async () => {
         const res = await RequestAPI.getResponse(checked)
        console.log('res: ', res)
        //onChangeCallback()
    }

    return <div className={s.orange}>
        <div>
              <span>
                homeworks 13
            </span>
        </div>
        <input type={'checkbox'} checked={checked} onChange={onChangeCallback}/>
        <button className={s.btn} onClick={onClickHandler}>enter</button>
    </div>
}
export default Request;
