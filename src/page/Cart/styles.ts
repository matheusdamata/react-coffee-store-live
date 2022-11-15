import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['base-text']};

  margin-top: 6rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  svg {
    margin-right: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const EmptyContent = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 6rem;
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.25rem;

  gap: 1rem;
`

export const ProductContainer = styled.div`
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

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 1rem;
`

export const ButtonBase = styled.button`
  width: 100%;
  height: 40px;

  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme.white};

  background: ${(props) => props.theme.purple};

  cursor: pointer;

  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['purple-dark']};
  }
`

export const ClearCart = styled.button`
  font-size: 0.75rem;
  color: ${(props) => props.theme.purple};

  margin-top: 1rem;

  border: 0;
  background: transparent;

  &:hover {
    transition: color 0.2s;
    color: ${(props) => props.theme['purple-dark']};
  }
`
