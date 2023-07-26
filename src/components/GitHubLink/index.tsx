import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { GithubLinkContainer } from './styles'

interface GitHubLinkProps {
  content: string
}

export function GitHubLink({ content }: GitHubLinkProps) {
  return (
    <GithubLinkContainer href="https://github.com/onerbreno" target="_blank">
      <span>{content}</span>
      <FaArrowUpRightFromSquare size={12} />
    </GithubLinkContainer>
  )
}
