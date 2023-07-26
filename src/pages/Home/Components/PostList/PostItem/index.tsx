import { Link } from 'react-router-dom'
import { PostItemContainer, PostHeader } from './styles'
import { dateFormatter } from '../../../../../Utils/formatter'
import ReactMarkdown from 'react-markdown'

interface PostIssue {
  id: number
  title: string
  createdAt: string
  body: string
}

interface PostProps {
  post: PostIssue
}

export function PostItem({ post }: PostProps) {
  return (
    <Link to={`/posts?id=${post.id}`}>
      <PostItemContainer>
        <PostHeader>
          <h3>{post.title}</h3>
          <time>{dateFormatter(post.createdAt)}</time>
        </PostHeader>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostItemContainer>
    </Link>
  )
}
