import Counter from './Counter'
import TodoList from './todos/TodoList'
import AddTodo from './todos/AddTodo'
import FilterLink from './todos/FilterLink'

const TodosCounter = () =>

  <div>
    <Counter />

    <AddTodo />
    <TodoList />
    <div>
      <FilterLink filter='all' text='All' />
      <FilterLink filter='active' text='Active' />
      <FilterLink filter='completed' text='Completed' />
    </div>
  </div>

export default TodosCounter