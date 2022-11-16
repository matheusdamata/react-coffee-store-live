import { Bank, CreditCard, Money } from 'phosphor-react'
import { Button } from './styles'

type ButtonsProps = {
  name: 'credit-card' | 'debit-card' | 'money'
}

export function ButtonsCheckout({ name }: ButtonsProps) {
  return (
    <>
      {name === 'credit-card' ? (
        <Button>
          <CreditCard size={18} /> CARTÃO DE CRÉDITO
        </Button>
      ) : null}
      {name === 'debit-card' ? (
        <Button>
          <Bank size={18} /> CARTÃO DE DÉBITO
        </Button>
      ) : null}
      {name === 'money' ? (
        <Button>
          <Money size={18} /> DINHEIRO
        </Button>
      ) : null}
    </>
  )
}
