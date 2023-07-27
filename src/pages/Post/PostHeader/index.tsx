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

interface Header {
  title: string
  time: string
  comments: number
  user: string
  repositoryUrl: string
}
interface PostHeaderProps {
  header: Header
}

export function PostHeader({ header }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to={'/'}>
          <FaChevronLeft />
          <span>Voltar</span>
        </Link>
        <GitHubLink content="Ver no GitHub" href={header.repositoryUrl} />
      </PostHeaderLinks>

      <h2>{header.title}</h2>

      <PostInfo>
        <InfoGroup>
          <FaGithub size={24} />
          <span>{header.user}</span>
        </InfoGroup>
        <InfoGroup>
          <FaCalendarDay size={24} />
          <span>{header.time}</span>
        </InfoGroup>
        <InfoGroup>
          <FaComment size={24} />
          <span>{header.comments} comentários</span>
        </InfoGroup>
      </PostInfo>
    </PostHeaderContainer>
  )
}
