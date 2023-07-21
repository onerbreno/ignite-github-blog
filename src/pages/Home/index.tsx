import { GitHubLink } from '../../components/GitHubLink'
import {
  HomeContainer,
  InfoGroup,
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
} from './styles'
import { FaUserGroup, FaGithub, FaBuilding } from 'react-icons/fa6'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src="https://github.com/onerbreno.png" alt="" />
        <div>
          <ProfileHeader>
            <h1>Breno Dias</h1>
            <GitHubLink />
          </ProfileHeader>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ProfileInfo>
            <InfoGroup>
              <FaGithub size={24} />
              <span>Freelancer</span>
            </InfoGroup>
            <InfoGroup>
              <FaBuilding size={24} />
              <span>Rocketseat</span>
            </InfoGroup>
            <InfoGroup>
              <FaUserGroup size={24} />
              <span>300</span>
            </InfoGroup>
          </ProfileInfo>
        </div>
      </ProfileContainer>
    </HomeContainer>
  )
}
