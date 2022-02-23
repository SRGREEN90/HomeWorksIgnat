import React, {ChangeEvent, useCallback} from "react";
import s from "./HW12.module.css";
import {changeThemeAC, FilterThemesType} from "./bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some', 'brown', 'blue', 'orange'];

function HW12() {

    const dispatch = useDispatch();
    const theme = useSelector<AppStoreType, FilterThemesType>(state => state.theme.theme)

    const onChangeCallback = useCallback(function (e: ChangeEvent<HTMLInputElement>,) {
        let onChange = e.currentTarget.value
        const action = changeThemeAC(onChange as FilterThemesType);
        dispatch(action);
    }, []);


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {
                themes.map((el) => (
                    <input
                        key={el.big()}
                        type={"radio"}
                        value={el}
                        checked={el === theme}
                        onChange={onChangeCallback}
                    />
                ))}

            {/*<input
                type={"radio"}
                value={'some'}
                checked={theme === 'some'}
                onChange={onChangeCallback}
            />
            <input
                type={"radio"}
                value={'red'}
                checked={theme === 'red'}
                onChange={onChangeCallback}
            />
            <input
                type={"radio"}
                value={'dark'}
                checked={theme === 'dark'}
                onChange={onChangeCallback}
            />*/}
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
