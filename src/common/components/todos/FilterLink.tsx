import { connect, SET_VISIBILITY_FILTER } from '../../actions'
import { VisibilityFilter } from '../../types'
import { a } from 'stylish-components'

interface Props {
  text: string
  setFilter: () => void
}

const StyledLink = a([{
  display: 'block',
  margin: 10,
}])

const FilterLink = ({ text, setFilter }: Props) =>

  <StyledLink onClick={setFilter}>
    {text}
  </StyledLink>

export default connect<{ text: string, filter: VisibilityFilter }>()(
  undefined,
  (dispatch, props) => ({
    setFilter: () => dispatch({ type: SET_VISIBILITY_FILTER, filter: props.filter })
  })
)(FilterLink)