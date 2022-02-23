export type ThemesType = {
    theme: string
}
export type ChangeThemesActionType = {
    type: 'CHANGE-THEMES'
    themes: Array<ThemesType>
}
export type FilterThemesType = 'dark' | 'red' | 'some' | 'brown' | 'orange'


type initStateType = {
    theme: FilterThemesType
}

const initState: initStateType = {
    theme: 'some'
}



export const themeReducer = (state = initState, action: changeThemeACType): initStateType => {
    switch (action.type) {
        case "CHANGE-THEMES": {
            return {
                ...state,
                theme: action.theme
            }
        }
        default: return state;
    }
};



export type changeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: FilterThemesType) => ({type: 'CHANGE-THEMES', theme} as const )