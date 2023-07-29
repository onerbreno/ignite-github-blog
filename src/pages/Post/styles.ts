import styled from 'styled-components'

export const PostContainer = styled.main`
  display: flex;

  flex-direction: column;

  margin-bottom: 8rem;
`

export const PostContent = styled.section`
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.brand.blue};
    margin-bottom: 0.25rem;
    margin-top: 1.75rem;
  }

  a {
    text-decoration: underline;
  }

  p {
    margin-bottom: 1.125rem;
  }
`
