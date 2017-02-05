import { createStore, Reducer } from 'redux'
import reducers from '../reducers'
import { State } from '../types/index'
import { RouterState } from 'react-router-redux'

declare const require: any
declare const module: { hot: any }

const getReduxDevTools = () => (
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
  &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

const configureStore = (preloadedState: State, isClient = false) => {
  const store = createStore<State>(
    reducers as Reducer<State>,
    preloadedState,
    isClient ? getReduxDevTools() : undefined
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore