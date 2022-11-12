import { Container } from './styles'

import LogoImage from '../../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <img src={LogoImage} alt="" />

      <button>
        <ShoppingCart size={25} weight="fill" />
      </button>
    </Container>
  )
}
