import { update, erase } from '../actions'
import { createReducer } from '@reduxjs/toolkit'


const user = createReducer('', {
  [update]: state =>  state,
  [erase]: state => state = ''
})

export default user