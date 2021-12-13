import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Jun from "./pages/Jun";
import JunPlus from "./pages/JunPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUN: '/jun',
    JUN_PLUS: '/jun-plus'
}
// add paths

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}


            <Route path={'/'}  element={<Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} element={ <PreJunior/>}/>

                <Route path={PATH.JUN} element={<Jun/>}/>
                <Route path={PATH.JUN_PLUS} element={<JunPlus/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route element={<Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
// add routes