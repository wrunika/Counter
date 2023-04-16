import React from 'react';
import {ChoosingValueInput} from "./ChoosingValueInput";

type SettingsPropsType = {
    maxTitle: string
    startTitle: string
    startInputValue: number
    maxInputValue: number
    getStartInputValue: (s: string)=>void
    getMaxInputValue: (s: string)=>void
}
export const Settings = (props: SettingsPropsType) => {

    const onChangeMaxHandler = (value: string) => {
        //debugger
        props.getMaxInputValue(value)
    }

    const onChangeStartHandler = (value: string) => {
        //debugger
        props.getStartInputValue(value)
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




/*
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
}*/
