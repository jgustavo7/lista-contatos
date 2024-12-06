import { Provider } from 'react-redux'
import Cadastro from './containers/Cadastro'
import EstiloGlobal from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Cadastro />
    </Provider>
  )
}

export default App
