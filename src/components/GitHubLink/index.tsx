import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { GithubLinkContainer } from './styles'

export function GitHubLink() {
  return (
    <GithubLinkContainer href="https://github.com/onerbreno" target="_blank">
      <span>GitHub</span>
      <FaArrowUpRightFromSquare size={12} />
    </GithubLinkContainer>
  )
}
