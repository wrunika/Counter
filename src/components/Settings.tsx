import React from 'react';
import {ChoosingValueInput} from "./ChoosingValueInput";
import {useDispatch} from "react-redux";
import {setMaxValueAC, setStartValueAC} from "../state/counter-reducer";

type SettingsPropsType = {
    maxTitle: string
    startTitle: string
    startInputValue: number
    maxInputValue: number
    getStartInputValue: (s: string)=>void
    getMaxInputValue: (s: string)=>void
    onInputChange: ()=>void
}
export const Settings = (props: SettingsPropsType) => {

    const dispatch = useDispatch()

    const onChangeMaxHandler = (value: string) => {
        debugger
        //props.getMaxInputValue(value)
        dispatch(setMaxValueAC(value))
        props.onInputChange()
    }

    const onChangeStartHandler = (value: string) => {
        debugger
        //props.getStartInputValue(value)
        dispatch(setStartValueAC(value))
        props.onInputChange()
    }

    const errorStartClass = props.startInputValue < 0 ? 'error' : props.startInputValue === props.maxInputValue ? 'error' : '';
    const errorMaxClass = props.startInputValue === props.maxInputValue ? 'error' : '';

    return (
        <div className={'settingsWrapper'}>
            <ChoosingValueInput
                title={props.maxTitle}
                value={props.maxInputValue.toString()}
                onChangeHandler={onChangeMaxHandler}
                className={errorMaxClass}
            />
            <ChoosingValueInput
                title={props.startTitle}
                value={props.startInputValue.toString()}
                onChangeHandler={onChangeStartHandler}
                className={errorStartClass}
            />
        </div>
    );
};
