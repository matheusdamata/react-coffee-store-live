import { useForm, FormProvider } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { ButtonsCheckout } from './components/ButtonsCheckout'
import {
  ButtonFinishedCheckout,
  ButtonsHeaderTitle,
  ButtonsPayment,
  ButtonsPaymentContent,
  Container,
  FormContainer,
  FormHeaderTitle,
} from './syles'
import { FormCheckout } from './components/FormCheckout'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'

const newSalesOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  address: zod.string().min(1, 'O campo "Rua" é necessário!'),
  number: zod.string().min(1, 'O campo "Número" é necessário!'),
  complement: zod.string(),
  district: zod.string().min(1, 'O campo "Bairro" é necessário!'),
  city: zod.string().min(1, 'O campo "Cidade" é necessário!'),
  uf: zod.string().min(1, 'O campo "UF" é necessário!'),
})

type NewSalesOrderFormData = zod.infer<typeof newSalesOrderFormValidationSchema>

export function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState('')

  const { carts, dispatch } = useContext(Context)

  const cartNumbers = carts.length
  const isSubmitSaleForm = !cartNumbers

  const newSalesOrderForm = useForm<NewSalesOrderFormData>({
    resolver: zodResolver(newSalesOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      address: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = newSalesOrderForm

  function handleNewSaleSubmit(data: NewSalesOrderFormData) {
    dispatch({
      type: 'REMOVE_ALL',
    })

    console.log(data, selectedPayment)
    reset()
  }

  return (
    <Container>
      <h1>Complete seu pedido</h1>

      <FormContainer>
        <FormHeaderTitle>
          <MapPinLine size={22} />
          <div>
            <strong>Endereço de entrega</strong>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHeaderTitle>

        <form
          id="formNewSales"
          onSubmit={handleSubmit(handleNewSaleSubmit)}
          action=""
        >
          <FormProvider {...newSalesOrderForm}>
            <FormCheckout />
          </FormProvider>
        </form>
      </FormContainer>

      <ButtonsPayment>
        <ButtonsHeaderTitle>
          <CurrencyDollar size={22} />
          <div>
            <strong>Pagamento</strong>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </ButtonsHeaderTitle>

        <ButtonsPaymentContent>
          <ButtonsCheckout
            name="credit-card"
            onClick={() => setSelectedPayment('Cartão de Crédito')}
          />
          <ButtonsCheckout
            name="debit-card"
            onClick={() => setSelectedPayment('Cartão de Débito')}
          />
          <ButtonsCheckout
            name="money"
            onClick={() => setSelectedPayment('Dinheiro')}
          />
        </ButtonsPaymentContent>
      </ButtonsPayment>

      <ButtonFinishedCheckout
        form="formNewSales"
        type="submit"
        disabled={isSubmitSaleForm}
      >
        Finalizar pedido
      </ButtonFinishedCheckout>
    </Container>
  )
}
