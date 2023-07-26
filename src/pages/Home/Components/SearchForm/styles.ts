import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;

    width: 100%;
    border: 0;
    gap: 0.75rem;
  }

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  input {
    color: ${(props) => props.theme.colors.base.text};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.base.border};
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme.colors.base.input};

    &::placeholder {
      color: ${(props) => props.theme.colors.base.label};
    }
  }
`

export const FormHeader = styled.span`
  display: flex;
  justify-content: space-between;
`
