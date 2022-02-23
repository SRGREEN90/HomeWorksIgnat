import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(40)
    const [value2, setValue2] = useState(60)


    // type initialRangeType = {
    //     initialRange: Array<string>
    // }
    // let initialRange = [ 'red', 'white', 'blue']
    // const [range, setRange] = useState<initialRangeType>(initialRange)
    //
    // if (value1 === 100) {
    //     setRange(true)
    // }

    let onChangeRange = (value1: number, value2: number) => {
        setValue1(value1)
        setValue2(value2)
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <h2>{value1}</h2>
                <SuperRange

                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <h2>{value1}</h2>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                    step={0.01}
                    disabled={true}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <h2>{value2}</h2>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
