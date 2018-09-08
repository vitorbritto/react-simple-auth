import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import COLORS from '../../styles/colors'
import TYPES from '../../styles/types'

const activeClassName = 'nav-item-active'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: ${COLORS.grayLighter};
`

export const NavBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Brand = styled.img`
  flex: .15;
  display: flex;
  height: 70px;
  align-items: flex-start;
  justify-content: center;
  background: ${COLORS.grayLight};
`

export const NavList = styled.ul`
  flex: .8;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: 20px;
  list-style: none;
  `;

export const Page = styled.li`
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(NavLink).attrs({ activeClassName })`
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${TYPES.small};
  color: ${COLORS.gray};
  &.${activeClassName} {
    color: ${COLORS.primary}
  }
`

export const Logout = styled.a`
  flex: .05;
  display: flex;
  height: 30px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  background-color: ${COLORS.primary};
  padding: 10px;
  color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.hover};
  }
  &:active {
    background-color: ${COLORS.active};
  }
`

