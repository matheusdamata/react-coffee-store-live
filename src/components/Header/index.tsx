import { Container } from './styles'

import LogoImage from '../../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../context/Context'

export function Header() {
  const { carts } = useContext(Context)

  return (
    <Container>
      <img src={LogoImage} alt="" />

      <button>
        <ShoppingCart size={25} weight="fill" />
        <span>{carts.length}</span>
      </button>
    </Container>
  )
}
