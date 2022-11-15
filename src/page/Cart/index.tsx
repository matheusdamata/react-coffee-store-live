import { Coffee, Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import {
  ButtonAddCart,
  ButtonBase,
  ButtonsAddAndRemoveContent,
  ButtonsContainer,
  ClearCart,
  Container,
  EmptyContainer,
  EmptyContent,
  FooterContainer,
  ProductContent,
  ProductContentFooter,
  ProductInfo,
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
              <ProductContent key={cart.id}>
                <img src={cart.imageUrl} alt="" />
                <ProductInfo>
                  <div>
                    <h1>{cart.name}</h1>
                  </div>

                  <ProductContentFooter>
                    <span>
                      R${' '}
                      <strong>
                        {cart.value.toLocaleString('pt-br', {
                          minimumFractionDigits: 2,
                        })}
                      </strong>
                    </span>

                    <ButtonsContainer>
                      <ButtonsAddAndRemoveContent>
                        <button
                          // onClick={() => setAmountProduct((state) => state - 1)}
                          disabled={cart.amount <= 1}
                        >
                          <Minus size={18} weight="fill" />
                        </button>
                        {cart.amount}
                        <button
                        // onClick={() => setAmountProduct((state) => state + 1)}
                        >
                          <Plus size={18} weight="fill" />
                        </button>
                      </ButtonsAddAndRemoveContent>
                      <ButtonAddCart
                      // onClick={handleAddToCart}
                      >
                        <ShoppingCartSimple size={18} weight="fill" />
                      </ButtonAddCart>
                    </ButtonsContainer>
                  </ProductContentFooter>
                </ProductInfo>
              </ProductContent>
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
