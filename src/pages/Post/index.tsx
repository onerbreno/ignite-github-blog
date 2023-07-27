// import ReactMarkdown from 'react-markdown'
import { PostHeader } from './PostHeader'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { githubApi } from '../../services/github'
import { dateFormatter } from '../../Utils/formatter'
import ReactMarkdown from 'react-markdown'
import { PostContainer, PostContent } from './styles'

interface GitHubIssueResponse {
  number: number
  title: string
  body: string
  created_at: string
  user: {
    login: string
  }
  comments: number
  html_url: string
}
interface PostIssue {
  id: number
  title: string
  body: string
  createdAt: string
  user: string
  comments: number
  repositoryUrl: string
}

export function Post() {
  const { id } = useParams()
  const [post, setPost] = useState<PostIssue>({
    id: 0,
    title: '',
    body: '',
    createdAt: '',
    user: '',
    comments: 0,
    repositoryUrl: '',
  })

  useEffect(() => {
    async function fetchIssue() {
      try {
        const { data } = await githubApi.get<GitHubIssueResponse>(
          `/repos/onerbreno/ignite-github-blog/issues/${id}`,
        )

        const post: PostIssue = {
          title: data.title,
          body: data.body,
          comments: data.comments,
          id: data.number,
          createdAt: dateFormatter(data.created_at),
          repositoryUrl: data.html_url,
          user: data.user.login,
        }

        setPost(post)
      } catch (error) {
        console.log(error)
      }
    }
    if (id) fetchIssue()
  }, [id])

  const postHeader = {
    title: post.title,
    time: post.createdAt,
    comments: post.comments,
    user: post.user,
    repositoryUrl: post.repositoryUrl,
  }

  return (
    <PostContainer>
      <PostHeader header={postHeader} />
      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
