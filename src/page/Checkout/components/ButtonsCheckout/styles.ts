import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: flex-start;

  border: 1px solid transparent;
  border-radius: 6px;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  background: ${(props) => props.theme['base-button']};

  padding: 1rem;
  white-space: nowrap;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.5rem;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
    box-shadow: none;
  }
`
