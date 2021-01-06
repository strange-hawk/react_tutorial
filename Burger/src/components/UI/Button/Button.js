import React from 'react'

const button = (props) => (
    <button onClick={props.clicked} disabled={props.disabled} className={['Button',props.btnType].join(' ')}>{props.children} </button>
)

export default  button