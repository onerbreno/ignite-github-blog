import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { GitHubLink } from '../../../components/GitHubLink'
import { PostHeaderContainer, PostHeaderLinks, PostInfo } from './styles'
import { Link } from 'react-router-dom'
import { InfoGroup } from '../../Home/Components/AuthorCard/styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to={'/'}>
          <FaChevronLeft />
          <span>Voltar</span>
        </Link>
        <GitHubLink content="Ver no GitHub" />
      </PostHeaderLinks>

      <h2>JavaScript data types and data structures</h2>

      <PostInfo>
        <InfoGroup>
          <FaGithub size={24} />
          <span>onerbreno</span>
        </InfoGroup>
        <InfoGroup>
          <FaCalendarDay size={24} />
          <span>Há 1 dia</span>
        </InfoGroup>
        <InfoGroup>
          <FaComment size={24} />
          <span>5 comentários</span>
        </InfoGroup>
      </PostInfo>
    </PostHeaderContainer>
  )
}
