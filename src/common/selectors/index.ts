import { selector } from '../utils'

export const visibleTodos = selector(
    state => state.todos,
    state => state.visibilityFilter,
    (todos, filter) => (
        todos.filter(todo => {
            switch (filter) {
                case 'all': return true
                case 'completed': return todo.completed
                case 'active': return !todo.completed
                default: return true
            }
        })
    )
)