export { connect } from '../utils'

import {
  State,
  VisibilityFilter
} from '../types'

// Action

export type Action =

  | INCREMENT
  | DECREMENT
  | ADD_TODO
  | TOGGLE_TODO
  | RENAME_TODO
  | SET_VISIBILITY_FILTER

// Action types

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const RENAME_TODO = 'RENAME_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export type INCREMENT = { type: typeof INCREMENT }
export type DECREMENT = { type: typeof DECREMENT }
export type ADD_TODO = { type: typeof ADD_TODO, task: string }
export type TOGGLE_TODO = { type: typeof TOGGLE_TODO, id: number }
export type RENAME_TODO = { type: typeof RENAME_TODO, id: number, task: string }
export type SET_VISIBILITY_FILTER = { type: typeof SET_VISIBILITY_FILTER, filter: VisibilityFilter }