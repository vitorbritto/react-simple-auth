import styled from 'styled-components'

import COLORS from '../../styles/colors'
import TYPES from '../../styles/types'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  color: ${COLORS.primary};
  padding: 40px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: ${TYPES.size.medium}
`;