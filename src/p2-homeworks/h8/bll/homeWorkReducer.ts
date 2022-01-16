import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType, action: MainType): UserType => {
    switch (action.type) {
        case 'sortUp': {
            let newState = [...state]
           let result =  newState.sort((prev, next) => next.age - prev.age );
            return  result
        }
        case 'sortDown': {
            let newState = [...state]
            let result =  newState.sort((prev, next) => prev.age - next.age);
            return  result
        }
        case 'check': {
            return [
                ...state.filter(p => p.age >= 18)
            ]
        }
        default:
            return state
    }
}

type MainType = sortUpACType | sortDownACType | sortCheckACType

type sortUpACType = ReturnType<typeof sortUpAC>
type sortDownACType = ReturnType<typeof sortDownAC>
type sortCheckACType = ReturnType<typeof sortCheckAC>

export const sortUpAC = () => {
    return {
        type: 'sortUp',
        payload: 'up'
    } as const
}
export const sortDownAC = () => {
    return {
        type: 'sortDown',
        payload: 'down'
    } as const
}
export const sortCheckAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}