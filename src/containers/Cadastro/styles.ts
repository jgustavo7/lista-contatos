import styled from 'styled-components'

export const Form = styled.form`
  max-width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  display: flex;
  justify-content: center;

  textarea: {
    resize: none;
    margin: 16px 0;
  }
`

export const Container = styled.div`
  display: flex;
`

export const Campo = styled.input`
  padding: 8px;
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
`

export const BotaoCadastrar = styled.button`
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
