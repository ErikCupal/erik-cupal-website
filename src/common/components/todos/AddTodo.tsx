import { ADD_TODO, connect } from '../../actions'

interface Props {
  addTodo: (task: string) => void
}

const AddTodo = ({ addTodo }: Props) => {

  let input: HTMLInputElement

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) { return }
          addTodo(input.value)
        }}
      >
        <input
          type='text'
          ref={node => input = node}
        />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(
  undefined,
  dispatch => ({
    addTodo: (task: string) => dispatch({ type: ADD_TODO, task })
  })
)(AddTodo)