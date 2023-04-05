import { createSlice } from '@reduxjs/toolkit'

export const todoForm = createSlice({
  name: 'todoForm',
  initialState: {
    form: {
      text: '',
      deadline: ''
    }
  },
  reducers: {
    changeField: (state, action) => {
      // console.log(action)
      state.form = {
        ...state.form,
        [action.payload.name]: action.payload.value
      }
    },
    clearField: (state) => {
      state.form = {
        text: '',
        deadline: ''
      }
    },
  }


})

export const todoFormActions = todoForm.actions


export default todoForm.reducer