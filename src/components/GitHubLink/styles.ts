import styled from 'styled-components'

export const GithubLinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  text-transform: uppercase;
  gap: 0.5rem;

  border-bottom: 1.5px solid transparent;

  span {
    font: ${(props) => props.theme.fonts.component.link};
  }

  &:hover {
    transition: all 0.3s;
    border-bottom: 1px solid ${(props) => props.theme.colors.brand.blue};
  }
`
