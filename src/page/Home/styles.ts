import styled from 'styled-components'

export const Container = styled.div`
  width: 450px;

  & > h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;

    text-align: center;

    color: ${(props) => props.theme['base-title']};

    margin-top: 4rem;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.25rem;

  gap: 1rem;
`
