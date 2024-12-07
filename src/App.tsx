import React, { useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ContatoForm from './components/ContatoForm'
import ContatoList from './components/ContatoList'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    background-color: #010101;
    color: white;
  }
`

const Container = styled.div`
  text-align: center;
  padding: 16px;
`

interface Contato {
  id: string
  name: string
  email: string
  phone: string
}

const App: React.FC = () => {
  const [contatoToEdit, setContatoToEdit] = useState<Contato | null>(null)

  const handleEdit = (contato: Contato) => {
    setContatoToEdit(contato)
  }

  const clearEdit = () => {
    setContatoToEdit(null)
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <h1>Lista de Contatos</h1>
        <ContatoForm contatoToEdit={contatoToEdit} onClearEdit={clearEdit} />
        <ContatoList onEdit={handleEdit} />
      </Container>
    </Provider>
  )
}

export default App
