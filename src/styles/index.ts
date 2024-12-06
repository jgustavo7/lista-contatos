import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        background-color: #fff;
        }
`

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 14px;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
`

export const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 40px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Botao = styled.button`
  margin: 8px;
  padding: 4px;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: blue;
  border-radius: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: green;
`

export default EstiloGlobal
