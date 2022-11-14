import {
  ButtonAddCart,
  ButtonsAddAndRemoveContent,
  ButtonsContainer,
  CircleStatus,
  Container,
  Content,
  ProductContentFooter,
  ProductContentHeader,
  ProductContentHeaderContent,
  ProductStock,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Context } from '../../../../context/Context'

interface ProductsType {
  id: number
  amount: number
  description: string
  imageUrl: string
  name: string
  value: number
}

interface ProductProps {
  product: ProductsType
}

export function Product({ product }: ProductProps) {
  const [amountProduct, setAmountProduct] = useState(1)

  const { dispatch } = useContext(Context)

  function handleAddToCart() {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        amount: amountProduct,
      },
    })
  }

  return (
    <Container>
      <img src={product.imageUrl} alt="Imagem do produto" />
      <Content>
        <ProductContentHeader>
          <ProductContentHeaderContent>
            <h1>{product.name}</h1>
            {product.amount === 0 ? (
              <ProductStock variant="red">Produto sem estoque</ProductStock>
            ) : (
              <ProductStock>Estoque: {product.amount} unidades</ProductStock>
            )}
          </ProductContentHeaderContent>
          <CircleStatus
            variant={product.amount === 0 ? 'red' : 'green'}
          ></CircleStatus>
        </ProductContentHeader>
        <ProductContentFooter>
          <span>
            R${' '}
            <strong>
              {product.value.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </strong>
          </span>

          {product.amount >= 1 ? (
            <ButtonsContainer>
              <ButtonsAddAndRemoveContent>
                <button
                  onClick={() => setAmountProduct((state) => state - 1)}
                  disabled={amountProduct <= 1}
                >
                  <Minus size={18} weight="fill" />
                </button>
                {amountProduct}
                <button onClick={() => setAmountProduct((state) => state + 1)}>
                  <Plus size={18} weight="fill" />
                </button>
              </ButtonsAddAndRemoveContent>
              <ButtonAddCart onClick={handleAddToCart}>
                <ShoppingCartSimple size={18} weight="fill" />
              </ButtonAddCart>
            </ButtonsContainer>
          ) : null}
        </ProductContentFooter>
      </Content>
    </Container>
  )
}
