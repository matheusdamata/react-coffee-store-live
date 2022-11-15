import { MagnifyingGlass } from 'phosphor-react'
import { useCallback, useContext, useEffect, useState } from 'react'
import api from '../../config/api'
import { Context } from '../../context/Context'
import { Product } from './components/Product'
import {
  Container,
  IconContent,
  InputSearch,
  ProductsContainer,
  SearchContainer,
} from './styles'

export function Home() {
  const [search, setSearch] = useState('')

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
      <h1>Encontre o café perfeito</h1>

      <SearchContainer>
        <InputSearch
          type="text"
          placeholder="Digite o nome do café..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconContent>
          <MagnifyingGlass size={32} />
        </IconContent>
      </SearchContainer>

      <ProductsContainer>
        {products
          .filter((product) =>
            search === ''
              ? product
              : product.name.toLowerCase().includes(search),
          )
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
