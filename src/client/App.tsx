import { Router, browserHistory } from 'react-router'
import routes from '../common/routes'
import { ReactRouterReduxHistory } from 'react-router-redux'

const App = ({ history }: { history: ReactRouterReduxHistory }) => (
  <Router routes={routes} history={history} />
)

export default App