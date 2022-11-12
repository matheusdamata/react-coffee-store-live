import { Container, IconContent, InputSearch } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function Search() {
  return (
    <Container>
      <InputSearch type="text" placeholder="Digite o nome do café..." />
      <IconContent>
        <MagnifyingGlass size={32} />
      </IconContent>
    </Container>
  )
}
