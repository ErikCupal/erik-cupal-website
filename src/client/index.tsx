import { AppContainer } from 'react-hot-loader'
declare const module: { hot: any }

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from '../common/store/configureStore'
import { State } from '../common/types'
import App from './App'


const preloadedState: State = (window as any).__PRELOADED_STATE__
const { store, history } = configureStore(preloadedState, true)

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
if (module && module.hot) {
  // Component hot realoading
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default
    render(NewApp)
  })
}