import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import todoForm from '../store/fromSlice'

export default configureStore({
  reducer: {
    todo: todoReducer,
    todoForm: todoForm
  }
})