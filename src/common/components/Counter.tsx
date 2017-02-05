import { connect, DECREMENT, INCREMENT } from '../actions'

interface Props {
  counter: number
  increment: () => void
  decrement: () => void
}

const Counter = ({ counter, increment, decrement }: Props) =>

  <div>
    <h2>Counter:{' ' + counter}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>

export default connect()(
  state => ({ counter: state.counter }),
  dispatch => ({
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
  })
)(Counter)