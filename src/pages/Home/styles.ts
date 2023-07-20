import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
`

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;
  padding: 2rem;

  margin-top: -5.5rem;
  background: ${(props) => props.theme.colors.base.profile};
  border-radius: 10px;

  box-shadow:
    0px 2px 28px rgba(0, 0, 0, 0.3),
    0px -50px 250px rgba(20, 88, 156, 0.3);

  img {
    border-radius: 8px;
    max-height: 148px;
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 0.5rem;
`
export const ProfileInfo = styled.div`
  margin-top: 1.5rem;
  gap: 1rem;
  display: flex;
`
export const InfoGroup = styled.span`
  display: flex;
  gap: 0.5rem;
`
