import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../Features/Slice/Count'

function Counter() {
  const dispatch=useDispatch()
  const value=useSelector((state)=>state.count.value)
  console.log(value,'value')
  return (
    <div>
      <button onClick={()=>dispatch(inc())}>+</button>
       <p>{value}</p>
       <button onClick={()=>dispatch(dec())}>-</button>
    </div>
  )
}

export default Counter