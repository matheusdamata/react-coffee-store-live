import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;

  background: ${(props) => props.theme.white};

  border-radius: 6px;

  img {
    width: 75px;
    height: 75px;

    margin: 0 1.25rem 0 1.25rem;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: bold;

    color: ${(props) => props.theme['base-title']};
  }
`

interface ProductStockProps {
  variant?: 'red'
}

export const ProductStock = styled.span<ProductStockProps>`
  font-size: 0.75rem;

  color: ${(props) =>
    props.variant === 'red'
      ? props.theme['red-remove']
      : props.theme['base-text']};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const ProductContentHeader = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-right: 1rem;
`

export const ProductContentHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`

interface CircleStatusProps {
  variant: 'green' | 'red'
}

export const CircleStatus = styled.div<CircleStatusProps>`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: ${(props) =>
    props.variant === 'red' ? props.theme['red-remove'] : props.theme.green};
`

export const ProductContentFooter = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-top: 0.5rem;
  margin-right: 1rem;

  span {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
  }

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
    border: 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  button {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ButtonsAddAndRemoveContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 5px;

  margin-right: 0.5rem;

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const ButtonAddCart = styled.button`
  background: ${(props) => props.theme.purple};

  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['purple-dark']};
  }

  svg {
    color: ${(props) => props.theme.white};
  }
`
