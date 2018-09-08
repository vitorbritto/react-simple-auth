import styled from 'styled-components'

import COLORS from '../../styles/colors'
import TYPES from '../../styles/types'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-size: ${TYPES.h1};
  color: ${COLORS.primary};
`

export const Copyright = styled.p`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
`
