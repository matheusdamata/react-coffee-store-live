import {
  CircleStatus,
  Container,
  Content,
  ProductContentFooter,
  ProductContentHeader,
  ProductContentHeaderContent,
  ProductStock,
} from './styles'

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
            R$ <strong>{product.value}</strong>
          </span>
          <button>ADD</button>
        </ProductContentFooter>
      </Content>
    </Container>
  )
}
