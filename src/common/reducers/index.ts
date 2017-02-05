import todos from './todos'
import visibilityFilter from './visibilityFilter'
import counter from './counter'
import { State } from '../types'
import { combineReducers } from '../utils'

import { routerReducer, RouterState } from 'react-router-redux'

const reducers = combineReducers<State & { routing: RouterState }>({
  todos,
  visibilityFilter,
  counter,
  routing: routerReducer
})

export default reducers