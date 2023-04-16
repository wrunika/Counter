import React from "react";

type CounterPropsType = {
  count: number | string
  maxValue: number
}

export const Counter = (props: CounterPropsType) => {
  const numberStyle = `number ${props.count===props.maxValue ? 'num-disabled' : props.count === 'Incorrect value!' ? 'num-disabled' : ''}`
  return(
    <div className={numberStyle}>
      {props.count}
    </div>
  )
}