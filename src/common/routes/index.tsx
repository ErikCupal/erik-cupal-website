import TodosCounter from '../components/TodosCounter'
import Home from '../components/Home'

import NoMatch from './NoMatch'

import {
  Route,
  IndexRoute
} from 'react-router'

const routes = (
  <Route path='/'>
    <IndexRoute component={Home} />
    <Route path='todos' component={TodosCounter} />
    <Route path='*' component={NoMatch} />
  </Route>
)

export default routes