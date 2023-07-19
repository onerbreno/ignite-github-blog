import { HomeContainer } from './styled'
import { FaCalendarDay, FaGithub, FaBuilding } from 'react-icons/fa6'

export function Home() {
  return (
    <HomeContainer>
      <header>
        <img src="https://github.com/onerbreno.png" alt="" />
        <div>
          <span>
            <h1></h1>
            <a href=""></a>
          </span>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <span>
            <span>
              <FaCalendarDay size={24} />
              onerbreno
            </span>
            <span>
              <FaGithub size={24} />
              Freelancer
            </span>
            <span>
              <FaBuilding size={24} />
              200
            </span>
          </span>
        </div>
      </header>
    </HomeContainer>
  )
}
