import { FaGithub, FaBuilding, FaUserGroup } from 'react-icons/fa6'
import { GitHubLink } from '../../../../components/GitHubLink'
import {
  InfoGroup,
  AuthorCardContainer,
  AuthorCardHeader,
  AuthorCardInfo,
} from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Author {
  name: string
  avatar_url: string
  bio: string
  company: string
  followers: number
  login: string
  html_url: string
}

export function AuthorCard() {
  const [author, setAuthor] = useState({} as Author)

  async function fetchProfile() {
    const response = await axios.get('https://api.github.com/users/onerbreno')

    setAuthor(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <AuthorCardContainer>
      <img src={author.avatar_url} alt="" />
      <div>
        <AuthorCardHeader>
          <h1>{author.name}</h1>
          <GitHubLink content="GitHub" />
        </AuthorCardHeader>
        <p>{author.bio}</p>
        <AuthorCardInfo>
          <InfoGroup>
            <FaGithub size={24} />
            <span>{author.login}</span>
          </InfoGroup>
          <InfoGroup>
            <FaBuilding size={24} />
            <span>{author.company}</span>
          </InfoGroup>
          <InfoGroup>
            <FaUserGroup size={24} />
            <span>{author.followers}</span>
          </InfoGroup>
        </AuthorCardInfo>
      </div>
    </AuthorCardContainer>
  )
}
