import React, {ChangeEvent} from "react";

type ValuePropsType = {
    title: string
    startInputValue?: string
    maxInputValue?: string
    onChangeHandlerCallback: (e: ChangeEvent<HTMLInputElement>)=>void
}
export const Value = (props: ValuePropsType) => {
    /*const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      alert(e.currentTarget.value)
    }*/
    return (
        <div className={'settingsValue'}>
            <span className={'settingsTitle'}>{props.title}</span>
            <input onChange={ props.onChangeHandlerCallback } className={'settingInput'} type="number"/>
        </div>
    )
}
