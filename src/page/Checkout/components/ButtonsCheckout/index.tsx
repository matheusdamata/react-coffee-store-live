import { Bank, CreditCard, Money } from 'phosphor-react'
import { Button } from './styles'

type ButtonsProps = {
  name: 'credit-card' | 'debit-card' | 'money'
  onClick: () => void
}

export function ButtonsCheckout({ name, onClick }: ButtonsProps) {
  function handleClickButton() {
    onClick()
  }

  return (
    <>
      {name === 'credit-card' ? (
        <Button onClick={handleClickButton}>
          <CreditCard size={18} /> CARTÃO DE CRÉDITO
        </Button>
      ) : null}
      {name === 'debit-card' ? (
        <Button onClick={handleClickButton}>
          <Bank size={18} /> CARTÃO DE DÉBITO
        </Button>
      ) : null}
      {name === 'money' ? (
        <Button onClick={handleClickButton}>
          <Money size={18} /> DINHEIRO
        </Button>
      ) : null}
    </>
  )
}
