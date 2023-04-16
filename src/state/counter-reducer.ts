export type StateType = {
    start: number
    max: number
    count: number
}

export type ActionTypes = ReturnType<typeof increaseCountAC> | ReturnType<typeof resetCountAC> | ReturnType<typeof setStartValueAC> | ReturnType<typeof setMaxValueAC> | ReturnType<typeof setStartValueAsCountAC>

const initialState = {
    start: 0,
    max: 5,
    count: 0
}
export const counterReducer = (state: StateType = initialState, action: ActionTypes): StateType => {
    debugger
  switch (action.type) {
      case "INCREASE-COUNT":
          return {...state, count: state.count + 1}
      case "RESET-COUNT":
          return {...state, count: state.start}
      case "SET-START-VALUE":
          return {...state, start: +action.start}
      case "SET-MAX-VALUE":
          return {...state, max: +action.max}
      case "SET-START-VALUE-AS-COUNT":
          return {...state, count: state.start}
      default:
          return state
  }
}

export const increaseCountAC = () => {   //count??
    return {
        type: 'INCREASE-COUNT',
        //count
    } as const
}
export const resetCountAC = () => {   //start??
    return {
        type: 'RESET-COUNT',
        //start
    } as const
}
export const setStartValueAC = (start: string) => {  //string??
    return {
        type: 'SET-START-VALUE',
        start
    } as const
}
export const setMaxValueAC = (max: string) => {   //string??
    return {
        type: 'SET-MAX-VALUE',
        max
    } as const
}
export const setStartValueAsCountAC = () => {   //start??
    return {
        type: 'SET-START-VALUE-AS-COUNT',
        //start
    } as const
}