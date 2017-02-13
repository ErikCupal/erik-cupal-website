import { TOGGLE_NAVBAR } from '../../../../actions'
import { connect } from '../../../../utils'
import { button, sm, md, div, transparent, darkseagreen, mediumseagreen, firstChild, child } from 'stylish-components'

const StyledButton = button<{ pressed?: boolean }>(({ pressed }) => [
  {
    backgroundColor: transparent,
    marginRight: 15,
    border: 0,
    marginLeft: 10,
  },
  sm({
    marginRight: 40
  }),
  md({
    display: 'none'
  }),

  child(
    {
      width: 26,
      height: 3,
      borderRadius: 1.5,
      backgroundColor: pressed ? darkseagreen : mediumseagreen,
      marginTop: 3,
    },
    sm({
      width: 30,
      marginTop: 4,
    })
  ),
  firstChild(
    {
      marginTop: 0,
    },
    sm({
      marginTop: 0,
    })
  ),
])

const IconBar = () => (<div />)

interface Props {
  pressed: boolean,
  onClick: () => void,
}

const NavButton = ({ pressed, onClick }: Props) => (
  <StyledButton pressed={pressed} onClick={onClick}>
    <IconBar />
    <IconBar />
    <IconBar />
  </StyledButton>
)

export default connect()(
  state => ({ pressed: !state.navbarCollapsed }),
  dispatch => ({ onClick: () => dispatch({ type: TOGGLE_NAVBAR }) })
)(NavButton)