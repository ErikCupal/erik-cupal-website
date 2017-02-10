import { header, View, Col, debug } from '../../../css'
import NavButton from './NavButton'
import Logo from './Logo'
import Navigation from './Navigation'

const StyledHeader = header([
  debug,
  {
    position: 'fixed',
    width: '100%',
    height: 75,

    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
])

const Header = () => (
  <StyledHeader>
    <Logo />
    <NavButton />
    <Navigation />
  </StyledHeader>
)

export default Header