import { header, debug } from 'stylish-components'
import NavButton from './NavButton'
import Logo from './Logo'
import Navigation from './Navigation'

const StyledHeader = header([
  {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',

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