import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Brand, NavBar, NavList, Page, Link, Logout } from './styles'
 
const LINKS = [
  { page: 'Home', path: '/' },
  { page: 'Need Help?', path: '/help' },
  { page: 'FAQ', path: '/faq' },
]

const _handleLogout = () => {
  console.log('You\'re logged out!')
}

const Header = props => (
  <Wrapper>
    <NavBar>
      <Brand src='' />
      <NavList>
        {LINKS.map(link =>
          <Page>
            <Link activeClassName={props.activeClassName} to={link.path}>
              {link.page}
            </Link>
          </Page>
        )}
      </NavList>
      <Logout onClick={() => _handleLogout}>Sair</Logout>
    </NavBar>
  </Wrapper>
)

Header.propTypes = {
  activeClassName: PropTypes.string.isRequired
};

export default Header
