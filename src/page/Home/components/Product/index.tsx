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
  onClick?: () => void
}

export function Product({ product, onClick }: ProductProps) {
  return (
    <Container>
      <img src={product.imageUrl} alt="Imagem do produto" />
      <Content>
        <ProductContentHeader>
          <ProductContentHeaderContent>
            <h1>{product.name}</h1>
            <ProductStock>Estoque: 10 unidades</ProductStock>
          </ProductContentHeaderContent>
          <CircleStatus></CircleStatus>
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

          <ButtonsContainer>
            <ButtonsAddAndRemoveContent>
              <button>
                <Minus size={18} weight="fill" />
              </button>
              1
              <button>
                <Plus size={18} weight="fill" />
              </button>
            </ButtonsAddAndRemoveContent>
            <ButtonAddCart>
              <ShoppingCartSimple size={18} weight="fill" />
            </ButtonAddCart>
          </ButtonsContainer>
        </ProductContentFooter>
      </Content>
    </Container>
  )
}
