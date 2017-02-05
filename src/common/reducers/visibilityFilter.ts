import { VisibilityFilter } from '../types'
import { Action, SET_VISIBILITY_FILTER } from '../actions'

const visibilityFilter = (state: VisibilityFilter = 'all', action: Action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter