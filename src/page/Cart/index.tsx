import { Coffee } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import {
  ButtonBase,
  ClearCart,
  Container,
  EmptyContainer,
  EmptyContent,
  FooterContainer,
  ProductContainer,
  ProductsContainer,
} from './styles'

export function Cart() {
  const { carts, dispatch } = useContext(Context)

  function handleClearCart() {
    dispatch({
      type: 'REMOVE_ALL',
    })
  }

  return (
    <Container>
      {carts.length === 0 ? (
        <EmptyContainer>
          <EmptyContent>
            <Coffee size={32} weight="fill" />
            <h1>Carrinho vázio</h1>
          </EmptyContent>

          <ButtonBase>Fazer compras</ButtonBase>
        </EmptyContainer>
      ) : (
        <>
          <ProductsContainer>
            {carts.map((cart) => (
              <ProductContainer key={cart.id}>
                <img src={cart.imageUrl} alt="" />
                <h1>{cart.name}</h1>
              </ProductContainer>
            ))}
          </ProductsContainer>
          {carts.length !== 0 ? (
            <FooterContainer>
              <ButtonBase>Finalizar pedido</ButtonBase>
              <ClearCart onClick={handleClearCart}>Limpar carrinho</ClearCart>
            </FooterContainer>
          ) : null}
        </>
      )}
    </Container>
  )
}
