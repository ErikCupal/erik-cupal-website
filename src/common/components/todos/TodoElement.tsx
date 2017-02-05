interface Props {
  onTodoClick: (name: string) => void
  onTodoCheck: () => void
  task: string
  completed: boolean
}

export default ({ onTodoClick, onTodoCheck, task, completed }: Props) =>

  <li
    style={{ listStyleType: 'none' }}
  >
    <input
      type='checkbox'
      checked={completed}
      onChange={onTodoCheck}
    />
    <span
      onClick={() => {
        const newName = prompt('Enter new name:', task)
        if (newName == undefined || !newName.trim()) return
        onTodoClick(newName)
      }}
    >
      {task}
    </span>
  </li>