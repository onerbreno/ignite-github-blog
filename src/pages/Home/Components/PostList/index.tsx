import { PostItem } from './PostItem'
import { PostListContainer } from './styles'

interface PostIssue {
  id: number
  title: string
  body: string
  createdAt: string
}

interface PostListProps {
  posts: PostIssue[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostListContainer>
  )
}
