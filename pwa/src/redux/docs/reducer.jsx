import { createReducer } from '@reduxjs/toolkit'
import {
  open,
} from "./actions"

export const docsSlice = {
  open: true,
}

const docsReducer = createReducer( docsSlice, {

  [open]: (state, action) => {
    state.open = action.open
    return state
  },

})

export { docsReducer }
