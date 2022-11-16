import styled from 'styled-components'

export const InputBase = styled.input`
  width: 12.5rem;

  border: 0;
  border-radius: 6px;

  margin-bottom: 1rem;
  padding: 0.75rem;

  font-size: 0.875rem;

  background: ${(props) => props.theme['base-input']};
`

export const InputBaseFlex = styled(InputBase)`
  flex: 1;
`

export const InputBaseMargin = styled(InputBase)`
  margin-right: 0.75rem;
`

export const InputBaseFlexAndMargin = styled(InputBase)`
  width: 1rem;

  flex: 1;
  margin-right: 0.75rem;
`

export const InputBaseMinWidth = styled(InputBase)`
  width: 3.75rem;
`

export const FormFlex = styled.div`
  display: flex;
`
