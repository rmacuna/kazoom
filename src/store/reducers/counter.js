import { increment, decrement } from '../actions'
import { createReducer } from '@reduxjs/toolkit'


const counter = createReducer(0, {
  [increment]: state =>  state + 1,
  [decrement]: state => state - 1
})

export default counter