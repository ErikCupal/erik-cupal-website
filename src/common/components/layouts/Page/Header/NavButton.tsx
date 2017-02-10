import { TOGGLE_NAVBAR } from '../../../../actions'
import { connect } from '../../../../utils'
import { button, div, mediumseagreen, darkseagreen, sm, transparent, md } from '../../../css'

const StyledButton = button<{ pressed?: boolean }>(({ pressed }) => [
  {
    backgroundColor: transparent,
    marginRight: 15,
    border: 0,
    marginLeft: 10,
  },
  sm({ marginRight: 40 }),
  md({ display: 'none' })
])

const IconBar = div<{ first?: boolean, pressed?: boolean }>(({ first, pressed }) => [
  {
    width: 26,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: pressed ? mediumseagreen : darkseagreen,
    marginTop: !first ? 3 : 0,
  },
  sm({
    width: 30,
    marginTop: !first ? 4 : 0,
  })
])

interface Props {
  pressed: boolean,
  onClick: () => void,
}

const NavButton = ({ pressed, onClick }: Props) => (
  <StyledButton onClick={onClick}>
    <IconBar pressed first />
    <IconBar pressed />
    <IconBar pressed />
  </StyledButton>
)

export default connect()(
  state => ({ pressed: !state.navbarCollapsed }),
  dispatch => ({ onClick: () => dispatch({ type: TOGGLE_NAVBAR }) })
)(NavButton)