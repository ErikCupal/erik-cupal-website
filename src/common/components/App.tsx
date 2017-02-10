import Counter from './Counter'
import Todos from './Todos'
import Flexy from './Flexy'
import { div } from './css'

const Body = div([{
  fontFamily: 'Nunito',
}])

const App = () => (
  <Body>
    <Counter />
    <Todos />
    <Flexy />
  </Body>
)

export default App