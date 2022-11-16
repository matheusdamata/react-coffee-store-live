import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  input:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
  }

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';

    margin-top: 4rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 6px;
  background: ${(props) => props.theme.white};

  padding: 1rem;
`

export const FormHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 1rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    margin-right: 0.5rem;
  }

  strong {
    font-weight: 400;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;

    margin-top: 2px;

    color: ${(props) => props.theme['base-text']};
  }
`

export const InputBase = styled.input`
  width: 12.5rem;

  border: 0;
  border-radius: 6px;

  margin-bottom: 1rem;
  padding: 0.75rem;

  font-size: 0.875rem;

  background: ${(props) => props.theme['base-input']};
`

export const InputBaseFlex = styled(InputBase)`
  flex: 1;
`

export const InputBaseMargin = styled(InputBase)`
  margin-right: 0.75rem;
`

export const InputBaseFlexAndMargin = styled(InputBase)`
  width: 1rem;

  flex: 1;
  margin-right: 0.75rem;
`

export const InputBaseMinWidth = styled(InputBase)`
  width: 3.75rem;
`

export const FormFlex = styled.div`
  display: flex;
`

export const ButtonsPayment = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 6px;
  background: ${(props) => props.theme.white};

  padding: 1rem;
  margin-top: 1rem;
`

export const ButtonsHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 1rem;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.5rem;
  }

  strong {
    font-weight: 400;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;

    margin-top: 2px;

    color: ${(props) => props.theme['base-text']};
  }
`
export const ButtonsPaymentContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`

export const ButtonFinishedCheckout = styled.button`
  width: 100%;
  height: 40px;

  margin-top: 1rem;

  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme.purple};

  font-weight: 400;
  color: ${(props) => props.theme.white};

  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['purple-dark']};
  }
`
