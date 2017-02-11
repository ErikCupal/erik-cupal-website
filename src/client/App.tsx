import { Router, browserHistory } from 'react-router'
import routes from '../common/routes'

const App = ({ history }: { history: typeof browserHistory }) => (
  <Router routes={routes} history={history} />
)

export default App