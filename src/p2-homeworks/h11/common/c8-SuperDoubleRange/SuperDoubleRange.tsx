import React from 'react'
import Slider from "@mui/material/Slider";


type SuperDoubleRangePropsType = {
    onChangeRange: (value1: number, value2: number) => void
    value: [number, number]
    step: number
    disabled: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props) => {

    const handleChange = (event: Event, value: number | number[]) => {
        if (Array.isArray(value)) {
            props.onChangeRange(value[0], value[1])
        }
    };

    return (
        <div>
            <Slider
                value={[props.value[0], props.value[1]]}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </div>
    );
}

export default SuperDoubleRange


// import React, {ChangeEvent, useState} from 'react'
//
//
// type SuperDoubleRangePropsType = {
//     onChangeRange?: (value1: number, value2:number) => void
//     value: [number, number]
//     step: number
//     disable: boolean
// }
//
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value, step,
//         disable, ...restProps
//     }
// ) => {
//     const [startValue, setStartValue] = useState(value[0])
//     const [endValue, setEndValue] = useState(value[1])
//
//     // сделать самому, можно подключать библиотеки
//     const DoubleRange= (e: ChangeEvent<HTMLInputElement>) => {
//         console.log(e)
//     }
//     return (
//         <>
//             <input
//                 name={'startValue'}
//                 type={'range'}
//                 onChange={DoubleRange}
//                 value={[startValue.toString(), endValue.toString()]}
//             />
//         </>
//     )
// }
//
// export default SuperDoubleRange