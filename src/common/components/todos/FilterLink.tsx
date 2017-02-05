import { connect, SET_VISIBILITY_FILTER } from '../../actions'
import { VisibilityFilter } from '../../types'

interface Props {
  text: string
  setFilter: () => void
}

const FilterLink = ({ text, setFilter }: Props) =>

  <a
    onClick={setFilter}
    style={{ padding: '3px' }}
  >
    {text}
  </a>

export default connect<{ text: string, filter: VisibilityFilter }>()(
  undefined,
  (dispatch, props) => ({
    setFilter: () => dispatch({ type: SET_VISIBILITY_FILTER, filter: props.filter })
  })
)(FilterLink)