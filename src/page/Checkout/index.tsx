import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { ButtonsCheckout } from './components/ButtonsCheckout'
import {
  ButtonFinishedCheckout,
  ButtonsHeaderTitle,
  ButtonsPayment,
  ButtonsPaymentContent,
  Container,
  FormContainer,
  FormFlex,
  FormHeaderTitle,
  InputBase,
  InputBaseFlex,
  InputBaseFlexAndMargin,
  InputBaseMargin,
  InputBaseMinWidth,
} from './syles'

export function Checkout() {
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

        <InputBase type="text" placeholder="CEP" />
        <FormFlex>
          <InputBaseFlex type="text" placeholder="Rua" />
        </FormFlex>
        <FormFlex>
          <InputBaseMargin type="number" placeholder="Número" />
          <InputBaseFlex type="text" placeholder="Complemento" />
        </FormFlex>
        <FormFlex>
          <InputBaseMargin type="text" placeholder="Bairro" />
          <InputBaseFlexAndMargin type="text" placeholder="Cidade" />
          <InputBaseMinWidth type="text" placeholder="UF" />
        </FormFlex>
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
          <ButtonsCheckout name="credit-card" />
          <ButtonsCheckout name="debit-card" />
          <ButtonsCheckout name="money" />
        </ButtonsPaymentContent>
      </ButtonsPayment>

      <ButtonFinishedCheckout>Finalizar pedido</ButtonFinishedCheckout>
    </Container>
  )
}
