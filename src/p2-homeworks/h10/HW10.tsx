import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import iconSvg from './svg/iconSvg.svg'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, LoadingType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {

    const isLoading = useSelector<AppStoreType, LoadingType>(state => state.loading)
    const dispatch = useDispatch()
    // useSelector, useDispatch
    const loading = false

    const setLoading = () => {
        dispatch(loadingAC(true))
       setTimeout(dispatch(loadingAC(false)),5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img alt='loader' src={iconSvg}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
