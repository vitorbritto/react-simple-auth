import styled from 'styled-components'

import COLORS from '../../styles/colors'
// import TYPES from '../../styles/types'

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Grid = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${COLORS.white};
  padding: 40px;
  list-style: none;
  margin: 0 auto;
`;

export const Card = styled.li`
  flex: .25;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  background: ${COLORS.grayLighter};
`
