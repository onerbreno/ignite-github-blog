import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  padding: 2rem;

  box-shadow:
    0px 2px 28px rgba(0, 0, 0, 0.3),
    0px -50px 250px rgba(20, 88, 156, 0.3);
  background: ${(props) => props.theme.colors.base.profile};

  h2 {
    margin-top: 1.25rem;
  }
`
export const PostHeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  a:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;
`
export const InfoGroup = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
