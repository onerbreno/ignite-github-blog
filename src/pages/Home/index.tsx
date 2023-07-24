import { AuthorCard } from '../Components/AuthorCard'
import { PostList } from '../Components/PostList'
import { SearchForm } from '../Components/SearchForm'
import { HomeContainer, PostSection } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <AuthorCard />

      <PostSection>
        <SearchForm />
        <PostList />
      </PostSection>
    </HomeContainer>
  )
}
