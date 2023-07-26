import axios from 'axios'
import { useState, useEffect } from 'react'
import { AuthorCard } from './Components/AuthorCard'
import { PostList } from './Components/PostList'
import { SearchForm } from './Components/SearchForm'
import { HomeContainer, PostSection } from './styles'
interface GitHubIssueResponse {
  number: number
  title: string
  body: string
  created_at: string
}
interface PostIssue {
  id: number
  title: string
  body: string
  createdAt: string
}

export function Home() {
  const [posts, setPosts] = useState<PostIssue[]>([])

  async function fetchPosts() {
    const response = await axios.get(
      'https://api.github.com/repos/onerbreno/ignite-github-blog/issues',
    )

    setPosts(
      response.data.map((post: GitHubIssueResponse) => {
        return {
          id: post.number,
          title: post.title,
          body: post.body,
          createdAt: post.created_at,
        }
      }),
    )
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  const postsAmount = posts.length

  console.log(posts)
  return (
    <HomeContainer>
      <AuthorCard />

      <PostSection>
        <SearchForm postsAmount={postsAmount} />
        <PostList posts={posts} />
      </PostSection>
    </HomeContainer>
  )
}
