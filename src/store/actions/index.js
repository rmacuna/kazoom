import { createAction } from '@reduxjs/toolkit'

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')


export {
  increment,
  decrement
}