import { connect } from '../../../../actions/index'
const { Link } = require('react-router-dom')
import { extend, black, floralwhite, lightslategrey, md, nav } from 'stylish-components'

const NavLink = extend(Link)<{ to: string }>([
  {
    textTransform: 'uppercase',
    padding: 0,
    lineHeight: 1.5,
    fontSize: 20,
    color: floralwhite,
    textDecoration: 'none',
    fontWeight: 600,
  },
  md({
    marginRight: 20,
    color: black,
  })
])

interface Props {
  collapsed?: boolean
}

const StyledNav = nav<Props>(({ collapsed }) => [
  {
    backgroundColor: lightslategrey,
    padding: '10px',

    display: collapsed ? 'none' : 'flex',
    width: '100%',
    flexDirection: 'column',
    flexBasis: '100%',
  },
  md({
    backgroundColor: 'initial',
    padding: 0,

    display: 'flex',
    width: 'auto',
    flexDirection: 'row',
    flexBasis: 'auto',
    alignItems: 'center',
    marginRight: '30px',
  })
])

const Navigation = ({ collapsed }: Props) => (
  <StyledNav collapsed={collapsed}>
    <NavLink to='/'>Blog</NavLink>
    <NavLink to='/about-me'>About me</NavLink>
    <NavLink to='/todos'>Todos</NavLink>
  </StyledNav>
)

export default connect()(
  state => ({ collapsed: state.navbarCollapsed })
)(Navigation)