import React from "react";

type ButtonPropsType = {
  title: string
  changeCount: ()=>void
  disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
  const btnStyle = `btn ${props.disabled ? 'disabled' : ''}`

  return(
    <div>
      <button onClick={props.changeCount} disabled={props.disabled} className={btnStyle}>{props.title}</button>

    </div>
  )
}