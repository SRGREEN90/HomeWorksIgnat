import React from 'react'
import {messageDataType} from "./HW1";
import './Message.module.css'
import Style from "./Message.module.css";


const Message: React.FC<messageDataType> = (props) => {
    return (
        <div className={Style.message}>
            <div className={Style.avatar}><img className={Style.img} src={props.avatar} alt="avatar"/></div>
            <div className={Style.message_content}>
                <div className={Style.message_body}>
                    <div className={Style.user_name}>{props.name}</div>
                    <div className={Style.user_message}>{props.message}</div>
                </div>
                <div className={Style.time_container}>
                    <div className={Style.time}>{props.time}</div>
                </div>
            </div>
        </div>

    )
}
export default Message
