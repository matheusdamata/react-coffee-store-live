import { useCallback, useContext, useEffect } from 'react'
import { Header } from '../../components/Header'
import api from '../../config/api'
import { Context } from '../../context/Context'
import { Product } from './components/Product'
import { Search } from './components/Search'
import { Container, ProductsContainer } from './styles'

export function Home() {
  const { products, dispatch } = useContext(Context)

  const getProductsStock = useCallback(async () => {
    try {
      const json = await api.getProduct()
      if (json.length > 0) {
        dispatch({
          type: 'GET_PRODUCTS',
          payload: json,
        })
      }
    } catch (e) {
      console.log('Tente novamente mais tarde!', e)
    }
  }, [dispatch])

  useEffect(() => {
    getProductsStock()
  }, [getProductsStock])

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
