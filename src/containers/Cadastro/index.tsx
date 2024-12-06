import { MainContainer, Titulo } from '../../styles'
import { Campo, BotaoCadastrar, Form } from './styles'

const Cadastro = () => {
  return (
    <MainContainer>
      <Titulo>Cadastrar Contato</Titulo>
      <Form>
        <Campo type="text" placeholder="nome" />
        <Campo type="email" placeholder="email" />
        <Campo type="telefone" placeholder="telefone" />
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  )
}

export default Cadastro
