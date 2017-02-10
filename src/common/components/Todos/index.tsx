import { VisibilityFilter } from '../../types'
import TodoList from './TodoList'
import FilterLink from './FilterLink'
import AddTodo from './AddTodo'

const Todos = () => (
  <div>
    <TodoList />
    <AddTodo />
    <div>
      <FilterLink filter='all' text='All' />
      <FilterLink filter='active' text='Active' />
      <FilterLink filter='completed' text='Completed' />
    </div>
  </div>
)

export default Todos