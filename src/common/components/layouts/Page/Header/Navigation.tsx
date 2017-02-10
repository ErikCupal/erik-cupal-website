import React from 'react'
import { Link } from 'react-router'
import { black, extend, floralwhite, lightslategrey, md, nav, papayawhip } from '../../../css'
import { connect } from '../../../../actions/index'

const NavLink = extend(Link)([
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
  </StyledNav>
)

export default connect()(
  state => ({ collapsed: state.navbarCollapsed })
)(Navigation)