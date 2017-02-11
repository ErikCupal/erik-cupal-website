import Counter from './Counter'
import Todos from './Todos'
import { div } from 'stylish-components'

const Body = div([{
  fontFamily: 'Nunito',
}])

const App = () => (
  <Body>
    <Counter />
    <Todos />
  </Body>
)

export default App