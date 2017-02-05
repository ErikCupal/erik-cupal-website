export interface State {
  readonly todos: Todo[]
  readonly visibilityFilter: VisibilityFilter
  readonly counter: number
}

export interface Todo {
  readonly id: number
  readonly task: string
  readonly completed: boolean
}

export type VisibilityFilter = 'all' | 'completed' | 'active'