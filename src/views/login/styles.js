import styled from 'styled-components'

import COLORS from '../../styles/colors'
import TYPES from '../../styles/types'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Form = styled.form`
  width: 400px;
  background: ${COLORS.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${COLORS.danger};
    margin-bottom: 15px;
    border: 1px solid ${COLORS.danger};
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 44px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: ${COLORS.grayDark};
    font-size: ${TYPES.size.medium};
    width: 100%;
    border: 1px solid ${COLORS.grayLight};
    &::placeholder {
      color: ${COLORS.gray};
    }
  }
  button {
    color: ${COLORS.white};
    font-size: ${TYPES.size.large};
    background: ${COLORS.primary};
    height: 44px;
    border: 0;
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bolder;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid ${COLORS.grayLight};
    width: 100%;
  }
  a {
    font-size: ${TYPES.size.medium};
    color: ${COLORS.gray};
    text-decoration: none;
  }
`;