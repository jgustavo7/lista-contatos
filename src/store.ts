import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './containers/contatosSlice'

const store = configureStore({
  reducer: {
    contatos: contatosReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
