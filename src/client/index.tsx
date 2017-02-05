import { AppContainer } from 'react-hot-loader'
declare const require: any
declare const module: { hot: any }

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../common/store/configureStore'
import { State } from '../common/types'
import App from './App'


const preloadedState: State = (window as any).__PRELOADED_STATE__
const store = configureStore(preloadedState, true)
const history = syncHistoryWithStore(browserHistory, store)

const render = (Component: typeof App) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component history={history} />
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  )
}

// Initial render

render(App)

// Hot reloading
if (module.hot) {
  // Silence react router errors
  const orgError = console.error
  console.error = (...args: any[]) => {
    if (args && args[0] && typeof args[0] === 'string' &&
      args[0].indexOf('You cannot change <Router routes>;') > -1) {
      // React route changed
    } else {
      // Log the error as normal
      orgError.apply(console, args)
    }
  }
  // Component hot realoading
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default
    render(NewApp)
  })
}