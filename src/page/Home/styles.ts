import styled from 'styled-components'

export const Container = styled.div`
  & > h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;

    text-align: center;

    color: ${(props) => props.theme['base-title']};

    margin-top: 4rem;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-end;

  margin-top: 0.75rem;
`

export const InputSearch = styled.input`
  width: 100%;
  height: 48px;

  border: 0;
  border-radius: 6px;

  padding: 1rem;
  color: ${(props) => props.theme['base-text']};

  & ::placeholder {
    color: ${(props) => props.theme['base-text']};
  }
`

export const IconContent = styled.div`
  position: absolute;
  margin-right: 10px;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.25rem;

  gap: 1rem;
`
