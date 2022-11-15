import { Container } from './styles'

import LogoImage from '../../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { carts } = useContext(Context)

  return (
    <Container>
      <NavLink to="/">
        <img src={LogoImage} alt="" />
      </NavLink>

      <NavLink to="/cart">
        <button>
          <ShoppingCart size={25} weight="fill" />
          <span>{carts.length}</span>
        </button>
      </NavLink>
    </Container>
  )
}
