import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrementer, Incrementer, Reset } from './action';

export default function Counter() {
  const num = useSelector(data=>data.num)
  const dispatch = useDispatch()
  return (<>
    <div>{num}</div>
    <button onClick={()=>{dispatch(Incrementer())}}>Incrementer</button>
    <button onClick={()=>{dispatch(Decrementer())}}>Decrementer</button>
    <button onClick={()=>{dispatch(Reset())}}>Reset</button>
    {/* <button onClick={()=>{dispatch({type:"incrementer",num:num})}}>Incrementer</button>
    <button onClick={()=>{dispatch({type:"decrementer",num:num})}}>Decrementer</button>
    <button onClick={()=>{dispatch({type:"reset",num:num})}}>Reset</button> */}
  </>
    
  )
}
