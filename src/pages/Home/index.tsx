import { useState, useEffect, useCallback } from 'react'
import { AuthorCard } from './Components/AuthorCard'
import { PostList } from './Components/PostList'
import { SearchForm } from './Components/SearchForm'
import { HomeContainer, PostSection } from './styles'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { githubApi } from '../../services/github'
import { useDebounce } from '../../hooks/useDebounce'

interface GitHubIssueResponse {
  number: number
  title: string
  body: string
  created_at: string
}

interface GitHubSearchIssueResponse {
  items: GitHubIssueResponse[]
}

interface PostIssue {
  id: number
  title: string
  body: string
  createdAt: string
}

const searchFormSchema = z.object({
  query: z.string(),
})

export type SearchFormInput = z.infer<typeof searchFormSchema>

export function Home() {
  const [posts, setPosts] = useState<PostIssue[]>([])

  const searchForm = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const query = useWatch({ control: searchForm.control, name: 'query' })

  const debouncedQuery = useDebounce(query)
  const fetchPosts = useCallback(async (url: string) => {
    try {
      const { data } = await githubApi.get<
        GitHubIssueResponse[] | GitHubSearchIssueResponse
      >(url)

      const responseIsArray = Array.isArray(data)

      if (responseIsArray) {
        const posts: PostIssue[] = data.map((post: GitHubIssueResponse) => {
          return {
            id: post.number,
            title: post.title,
            body: post.body,
            createdAt: post.created_at,
          }
        })

        setPosts(posts)
      } else {
        const posts: PostIssue[] = data.items.map(
          (post: GitHubIssueResponse) => {
            return {
              id: post.number,
              title: post.title,
              body: post.body,
              createdAt: post.created_at,
            }
          },
        )

        setPosts(posts)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (debouncedQuery) {
      const url = `search/issues?q=${debouncedQuery}%20repo:onerbreno/ignite-github-blog`
      fetchPosts(url)
    } else {
      const url = '/repos/onerbreno/ignite-github-blog/issues'
      fetchPosts(url)
    }
  }, [fetchPosts, debouncedQuery])

  const postsAmount = posts.length

  return (
    <HomeContainer>
      <AuthorCard />

      <PostSection>
        <FormProvider {...searchForm}>
          <SearchForm postsAmount={postsAmount} />
        </FormProvider>
        <PostList posts={posts} />
      </PostSection>
    </HomeContainer>
  )
}
