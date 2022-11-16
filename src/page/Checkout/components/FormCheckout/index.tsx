import { useFormContext } from 'react-hook-form'

import {
  FormFlex,
  InputBase,
  InputBaseFlex,
  InputBaseFlexAndMargin,
  InputBaseMargin,
  InputBaseMinWidth,
} from './styles'

export function FormCheckout() {
  const { register } = useFormContext()

  return (
    <>
      <InputBase type="text" placeholder="CEP" {...register('cep')} />
      <FormFlex>
        <InputBaseFlex type="text" placeholder="Rua" {...register('address')} />
      </FormFlex>
      <FormFlex>
        <InputBaseMargin
          type="text"
          placeholder="Número"
          {...register('number')}
        />
        <InputBaseFlex
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
      </FormFlex>
      <FormFlex>
        <InputBaseMargin
          type="text"
          placeholder="Bairro"
          {...register('district')}
        />
        <InputBaseFlexAndMargin
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />
        <InputBaseMinWidth type="text" placeholder="UF" {...register('uf')} />
      </FormFlex>
    </>
  )
}
