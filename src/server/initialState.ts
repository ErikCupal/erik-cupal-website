import { State } from '../common/types'

const initialState: State = {
  todos: [
    {
      id: 1,
      task: 'Buy milk',
      completed: false,
    },
    {
      id: 2,
      task: 'Buy bread',
      completed: false,
    },
    {
      id: 3,
      task: 'Make dinner',
      completed: false,
    },
  ],
  visibilityFilter: 'all',
  counter: 0,
  navbarCollapsed: true,
}

export default initialState