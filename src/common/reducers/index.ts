import navbarCollapsed from './navbarCollapsed'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import counter from './counter'
import { State } from '../types'
import { combineReducers } from '../utils'

import { routerReducer, RouterState } from 'react-router-redux'

const reducers = combineReducers<State>({
  todos,
  visibilityFilter,
  counter,
  navbarCollapsed
})

export default reducers