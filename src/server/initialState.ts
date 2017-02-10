import { State } from '../common/types'

const initialState: State = {
  todos: [
    {
      id: 1,
      task: 'Finish the app',
      completed: false
    },
    {
      id: 2,
      task: 'Play Witcher 3',
      completed: false
    },
  ],
  visibilityFilter: 'all',
  counter: 0,
  navbarCollapsed: true,
}

export default initialState