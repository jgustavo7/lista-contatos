import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addContato, editContato } from '../containers/contatosSlice'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 360px;
  margin: 0 auto;
`

const Input = styled.input`
    margin 6px 0;
    border-radius: 4px;
    border: 1px solid rgb(217 91 5 / 34%);
    background: transparent;
    padding: 8px;
    color: #fff;

    &: focus {
    border-color: #d95b05;
    box-shadow: 0 0 5px #d95b05;
    outline: none;
    }
`

const Button = styled.button`
  margin-top: 10px;
  background-color: #d95b05;
  color: white;
  border: none;
  padding: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #b14800;
  }
`

interface ContatoFormProps {
  contatoToEdit?: {
    id: string
    name: string
    email: string
    phone: string
  } | null
  onClearEdit: () => void
}

const ContatoForm: React.FC<ContatoFormProps> = ({
  contatoToEdit,
  onClearEdit
}) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (contatoToEdit) {
      setName(contatoToEdit.name)
      setEmail(contatoToEdit.email)
      setPhone(contatoToEdit.phone)
    } else {
      setName('')
      setEmail('')
      setPhone('')
    }
  }, [contatoToEdit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contatoToEdit) {
      dispatch(editContato({ id: contatoToEdit.id, name, email, phone }))
      onClearEdit()
    } else {
      const id = new Date().toISOString()
      dispatch(addContato({ id, name, email, phone }))
    }
    setName('')
    setEmail('')
    setPhone('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        placeholder="E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">
        {contatoToEdit ? 'Atualizar Contato' : 'Adicionar Contato'}
      </Button>
    </Form>
  )
}

export default ContatoForm
