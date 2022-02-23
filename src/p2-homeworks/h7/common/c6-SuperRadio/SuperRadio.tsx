import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    value: string
    name: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let onChange = e.currentTarget.value
             onChangeOption?.(onChange)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
            <label key={name + '-' + i}>
                <input
                    type={name}
                    value={o}
                    checked={value === o}
                    onChange={onChangeCallback}

                    // name, checked, value, onChange
                />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
