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

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    position: absolute;
    margin-top: -40px;
    margin-right: -40px;

    border-radius: 50%;

    background: ${(props) => props.theme['yellow-dark']};

    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`
