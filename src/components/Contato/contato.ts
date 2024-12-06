import styled from 'styled-components'
import { Botao } from '../../styles'

export const Card = styled.div`
    background-color: #000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0.25)
    padding: 16px;
    margin-bottom: 4px;
    margin-top: 4px;
    border-radius: 4px;

    label {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Acoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: red;
`
