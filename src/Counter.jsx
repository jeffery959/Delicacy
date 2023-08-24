import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  Filter} from './features/counter/menuSlice'

function Counter() {
  const Menu = useSelector((state) => state.counter.Menu)
  const dispatch = useDispatch()
  

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(Filter("Dinner"))}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default Counter