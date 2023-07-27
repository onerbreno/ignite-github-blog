import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { GithubLinkContainer } from './styles'

interface GitHubLinkProps {
  content: string
  href: string
}

export function GitHubLink({ content, href }: GitHubLinkProps) {
  return (
    <GithubLinkContainer href={href} target="_blank">
      <span>{content}</span>
      <FaArrowUpRightFromSquare size={12} />
    </GithubLinkContainer>
  )
}
