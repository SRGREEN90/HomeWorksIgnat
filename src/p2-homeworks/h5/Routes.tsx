import React from 'react'
import {Route, Routes} from 'react-router-dom'

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

function Routes2() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                {/*<Redirect from = {'/ '} to={PATH.PRE_JUNIOR}/>*/}


                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUN} element={<Jun/>}/>
                <Route path={PATH.JUN_PLUS} element={<JunPlus/>}/>


                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>
                <Route path={'*'} element={<PreJunior/>}/>
            </Routes>
        </div>
    )
}

export default Routes2
// add routes