import { Link } from 'react-router-dom'
import { PostItemContainer, PostHeader } from './styles'
import { dateFormatter } from '../../../../../Utils/formatter'

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
    <Link to={`posts/${post.id}`}>
      <PostItemContainer>
        <PostHeader>
          <h3>{post.title}</h3>
          <time>{dateFormatter(post.createdAt)}</time>
        </PostHeader>
        <p>{post.body}</p>
      </PostItemContainer>
    </Link>
  )
}
