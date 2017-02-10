import { setupPage, normalize } from 'csstips'

import Page from '../components/layouts/Page'

import App from '../components/App'
import Home from '../components/Home'

import NoMatch from './NoMatch'

import {
  Route,
  IndexRoute
} from 'react-router'

normalize()
setupPage('#app')

const routes = (
  <Route path='/' component={Page}>
    <IndexRoute component={Home} />
    <Route path='todos' component={App} />
    <Route path='*' component={NoMatch} />
  </Route>
)

export default routes