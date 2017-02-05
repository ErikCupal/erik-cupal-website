import { Action, ADD_TODO, TOGGLE_TODO } from '../actions'
import { Todo } from '../types'

const todos = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          task: action.task,
          completed: false,
          id: Date.now()
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      })
    default:
      return state
  }
}

export default todos