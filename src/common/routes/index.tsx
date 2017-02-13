import { setupPage, normalize } from 'csstips'
import { style } from 'typestyle'
import { init } from 'stylish-components'
import { Route, Switch } from 'react-router-dom'

import Page from '../components/layouts/Page'

import App from '../components/App'
import Home from '../components/Home'
import NoMatch from './NoMatch'

init(style)
normalize()
setupPage('#app')

const Routes = () => (
  <Page>
    <Switch>
      <Route path={`/`} exact component={Home} />
      <Route path={`/todos`} component={App} />
      <Route path={`/*`} component={NoMatch} />
    </Switch>
  </Page>
)

export default Routes