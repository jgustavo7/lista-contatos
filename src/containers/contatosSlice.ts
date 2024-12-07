import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contato {
  id: string
  name: string
  email: string
  phone: string
}

interface ContatosState {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    addContato: (state, action: PayloadAction<Contato>) => {
      state.contatos.push(action.payload)
    },
    removeContato: (state, action: PayloadAction<string>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id === action.payload
      )
    },
    editContato: (state, action: PayloadAction<Contato>) => {
      const index = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.contatos[index] = action.payload
      }
    }
  }
})

export const { addContato, removeContato, editContato } = contatosSlice.actions
export default contatosSlice.reducer
