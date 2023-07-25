import ReactMarkdown from 'react-markdown'
import { PostContainer, PostContent } from './styles'
import { PostHeader } from './PostHeader'

export function Post() {
  return (
    <PostContainer>
      <PostHeader />
      <PostContent>
        <ReactMarkdown></ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
