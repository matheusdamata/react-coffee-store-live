import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import api from '../../config/api'
import { Product } from './components/Product'
import { Search } from './components/Search'
import { Container, ProductsContainer } from './styles'

type ProductsType = {
  id: number
  amount: number
  description: string
  imageUrl: string
  name: string
  value: number
}

export function Home() {
  const [products, setProducts] = useState<ProductsType[]>([])

  async function getProductsStock() {
    try {
      const json = await api.getProduct()
      if (json.length > 0) {
        setProducts(() => json)
      }
    } catch (e) {
      console.log('Tente novamente mais tarde!', e)
    }
  }

  useEffect(() => {
    getProductsStock()
  }, [])

  return (
    <Container>
      <Header />

      <h1>Encontre o café perfeito</h1>
      <Search />
      <ProductsContainer>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}
