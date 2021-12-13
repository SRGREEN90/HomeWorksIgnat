import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";

function Header() {
    return (
        <div >
            <div>
                <NavLink to={PATH.PRE_JUNIOR} >PreJunior</NavLink>
            </div>
            <div >
                <NavLink to={PATH.JUN}>Jun</NavLink>
            </div>
            <div >
                <NavLink to={PATH.JUN_PLUS} >JunPlus</NavLink>
            </div>
        </div>
    )
}

export default Header

// add NavLinks -  нужно , чтобы NavLink выезжали