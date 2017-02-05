import { visibleTodos } from '../../selectors'
import { connect, RENAME_TODO, TOGGLE_TODO } from '../../actions'
import { Todo } from '../../types'
import TodoElement from './todoElement'

interface Props {
  toggleTodo: (id: number) => void
  renameTodo: (id: number, task: string) => void
  visibleTodos: Todo[]
}

const TodoList = ({ toggleTodo, renameTodo, visibleTodos }: Props) =>

  <ul>
    {visibleTodos.map(todo =>
      <TodoElement
        key={todo.id}
        {...todo}
        onTodoClick={(name: string) => renameTodo(todo.id, name)}
        onTodoCheck={() => toggleTodo(todo.id)}
      >
        {todo.task}
      </TodoElement>
    )}
  </ul>

export default connect()(
  store => ({
    visibleTodos: visibleTodos(store)
  }),
  dispatch => ({
    toggleTodo: (id: number) => dispatch({ type: TOGGLE_TODO, id }),
    renameTodo: (id: number, task: string) => dispatch({ type: RENAME_TODO, id, task })
  })
)(TodoList)