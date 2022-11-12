import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    border: 0;
    border-radius: 6px;

    background: ${(props) => props.theme['yellow-light']};

    & svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
