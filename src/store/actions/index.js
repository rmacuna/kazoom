import { createAction } from '@reduxjs/toolkit'

const update = createAction('UPDATE')
const erase = createAction('ERASE')


export {
  update,
  erase
}