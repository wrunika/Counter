import React, {ChangeEvent} from 'react';

type ChoosingValueType = {
    title: string
    value: string
    onChangeHandler: (s: string)=>void
    className: string
}

export const ChoosingValueInput = (props: ChoosingValueType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }
    return (
        <div className={'settingsValue'}>
            <span className={'settingsTitle'}>{props.title}</span>
            <input value={props.value} onChange={ onChangeHandler } className={props.className} type="number"/>
        </div>
    )
}