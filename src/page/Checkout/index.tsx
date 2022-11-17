import React, { useContext, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import Switch from '@mui/material/Switch'

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
  SwitchContainer,
} from './syles'
import { FormCheckout } from './components/FormCheckout'

import { Context } from '../../context/Context'

const newSalesOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  address: zod.string().min(1, { message: 'Required' }),
  number: zod.string().min(1, 'O campo "Número" é necessário!'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'O campo "Bairro" é necessário!'),
  city: zod.string().min(1, 'O campo "Cidade" é necessário!'),
  uf: zod.string().min(1, 'O campo "UF" é necessário!'),
})

type NewSalesOrderFormData = zod.infer<typeof newSalesOrderFormValidationSchema>

export function Checkout() {
  const [isFormCompleted, setIsFormCompleted] = useState(false)
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

  const { handleSubmit, reset, watch } = newSalesOrderForm

  function handleNewSaleSubmit(data: NewSalesOrderFormData) {
    dispatch({
      type: 'REMOVE_ALL',
    })

    console.log(selectedPayment)
    reset()
  }

  const inputCEP = watch('cep')
  const inputUF = watch('uf')
  const inputADDRESS = watch('address')
  const inputDISTRICT = watch('district')
  const inputNUMBER = watch('number')
  const inputCITY = watch('city')

  const isFormComplete = !!(
    inputCEP.length > 0 &&
    inputUF.length > 0 &&
    inputADDRESS.length > 0 &&
    inputDISTRICT.length > 0 &&
    inputNUMBER.length > 0 &&
    inputCITY.length > 0
  )

  const isCheckoutComplete = isFormComplete && !isSubmitSaleForm

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormCompleted(event.target.checked)
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

        {!isFormCompleted ? (
          <form
            id="formNewSales"
            onSubmit={handleSubmit(handleNewSaleSubmit)}
            action=""
          >
            <FormProvider {...newSalesOrderForm}>
              <FormCheckout />
            </FormProvider>
          </form>
        ) : null}

        <SwitchContainer>
          <span>Endereço completo?</span>
          <Switch
            color="secondary"
            checked={isFormCompleted}
            onChange={handleChangeSwitch}
          />
        </SwitchContainer>
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

        {isFormCompleted ? (
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
        ) : null}
      </ButtonsPayment>

      <ButtonFinishedCheckout
        form="formNewSales"
        type="submit"
        disabled={!isCheckoutComplete}
      >
        Finalizar pedido
      </ButtonFinishedCheckout>
    </Container>
  )
}
