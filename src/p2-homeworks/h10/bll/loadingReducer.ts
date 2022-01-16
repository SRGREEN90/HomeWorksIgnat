

const LOADING = 'LOADING'
const STOP_LOADING = 'STOP_LOADING'

export type LoadingType = {
    isLoading: boolean
}
const initState: LoadingType = {
    isLoading: false
}



export const loadingReducer = (state = initState, action: MainType): LoadingType => {
    switch (action.type) {
        case LOADING:
             return {
              ...state,
                 isLoading: action.payload.isLoading
            }
        case STOP_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state
    }
}
type MainType = loadingACType | stopLoadingACType
export type loadingACType = ReturnType<typeof loadingAC>
export type stopLoadingACType = ReturnType<typeof stopLoadingAC>

export const loadingAC = (isLoading: boolean): any => {
    return{
        type: LOADING,
        payload:{
            isLoading: true
        }
    }as const
}
export const stopLoadingAC = (isLoading: boolean): any => {
    return{
        type: STOP_LOADING,
        payload:{
            isLoading: false
        }
    }as const
}