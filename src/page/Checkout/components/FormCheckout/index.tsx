import { useFormContext } from 'react-hook-form'

import {
  FormFlex,
  InputBase,
  InputBaseFlex,
  InputBaseFlexAndMargin,
  InputBaseMargin,
  InputBaseMinWidth,
  InputBaseNumberMargin,
} from './styles'

export function FormCheckout() {
  const { register } = useFormContext()

  return (
    <>
      <InputBase type="text" placeholder="CEP" {...register('cep')} required />
      <FormFlex>
        <InputBaseFlex
          type="text"
          placeholder="Rua"
          {...register('address')}
          required
        />
      </FormFlex>
      <FormFlex>
        <InputBaseNumberMargin
          type="text"
          placeholder="Número"
          {...register('number')}
          required
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
          required
        />
        <InputBaseFlexAndMargin
          type="text"
          placeholder="Cidade"
          {...register('city')}
          required
        />
        <InputBaseMinWidth
          type="text"
          placeholder="UF"
          {...register('uf')}
          required
        />
      </FormFlex>
    </>
  )
}
