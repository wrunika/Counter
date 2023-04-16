import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Button} from './components/Button';
import {Settings} from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./state/store";
import {
    increaseCountAC,
    resetCountAC,
    setMaxValueAC,
    setStartValueAC,
    setStartValueAsCountAC, StateType
} from "./state/counter-reducer";


/*type StateType = {
    start: number
    max: number
    count: number
}*/


function App() {

    const maxTitle = 'max value';
    const startTitle = 'start value';
    const incorrectValue = 'Incorrect value!';
    const enterValue = 'Enter values and press "set"';

    //const [state, setState] = useState<StateType>({start: 0, max: 5, count: 0});
    const [editMode, setEditMode] = useState(false);
    const counterState = useSelector<RootStateType, StateType>(state => state.counter)
    const dispatch = useDispatch()

    /*useEffect(() => {
        const countAsString = localStorage.getItem('countValue')
        const startAsString = localStorage.getItem('startValue')
        const maxAsString = localStorage.getItem('maxValue')

        if (countAsString && startAsString && maxAsString) {
            setState({...state, count: JSON.parse(countAsString), start: JSON.parse(startAsString), max: JSON.parse(maxAsString)})
            setEditMode(false)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify((state.count)))
        localStorage.setItem('startValue', JSON.stringify((state.start)))
        localStorage.setItem('maxValue', JSON.stringify((state.max)))
    }, [state.count, state.start, state.max])*/


    const increaseCount = () => {
        //state.count < state.max && setState({...state, count: state.count + 1})
        counterState.count < counterState.max && dispatch(increaseCountAC())

    }
    const resetCount = () => {
        //setState({...state, count: state.start})
        dispatch(resetCountAC())
    }

    const getStartInputValue = (s: string) => {
        //debugger
        //setEditMode(true)
        //setState({...state, start: +s})
        //dispatch(setStartValueAC(s))
    }
    const getMaxInputValue = (s: string) => {
        debugger
        //setEditMode(true)
        //setState({...state, max: +s})
        //dispatch(setMaxValueAC(s))
    }
    const changeEditMode = () => {
      setEditMode(true)
    }

    const setStartValue = () => {
        //debugger
        //setState({...state, count: state.start})
        dispatch(setStartValueAsCountAC())
        setEditMode(false)
    }

    //const counterValue = state.start < 0 ? incorrectValue : state.start >= state.max ? incorrectValue : editMode ? enterValue : state.count;
    const counterValue = counterState.start < 0
        ? incorrectValue
        : counterState.start >= counterState.max
            ? incorrectValue
            : editMode
                ? enterValue
                : counterState.count;

    //const disabledSetButton = state.start < 0 || state.start >= state.max;
    const disabledSetButton = counterState.start < 0 || counterState.start >= counterState.max;
    //const disabledIncrButton = state.start < 0 || state.count === state.max || state.start >= state.max;
    const disabledIncrButton = counterState.start < 0 || counterState.count === counterState.max || counterState.start >= counterState.max;
    //const disabledResetButton = state.start < 0 || state.count === state.start || state.start >= state.max;
    const disabledResetButton = counterState.start < 0 || counterState.count === counterState.start || counterState.start >= counterState.max;


    return (
        <div className="App">
            <div className={'wrapper'}>
                <Settings
                    maxTitle={maxTitle}
                    startTitle={startTitle}
                    getStartInputValue={getStartInputValue}
                    getMaxInputValue={getMaxInputValue}
                    //startInputValue={state.start}
                    startInputValue={counterState.start}
                    //maxInputValue={state.max}
                    maxInputValue={counterState.max}
                    onInputChange={changeEditMode}
                />
                <div className={'buttons'}>
                    <Button title={'set'} changeCount={setStartValue} disabled={disabledSetButton}/>
                </div>
            </div>
            <div className={'wrapper'}>
                <div>
                    {/*<Counter count={counterValue} maxValue={state.max}/>*/}
                    <Counter count={counterValue} maxValue={counterState.max}/>
                </div>
                <div className='buttons'>
                    <Button title={'incr'} changeCount={increaseCount} disabled={disabledIncrButton}/>
                    <Button title='reset' changeCount={resetCount} disabled={disabledResetButton}/>
                </div>
            </div>
        </div>
    );
}

export default App;
