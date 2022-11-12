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

export const ProductStock = styled.span`
  font-size: 0.75rem;

  color: ${(props) => props.theme['base-text']};
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
  variant?: 'red'
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
`
