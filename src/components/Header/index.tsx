import {
  BlurEffect,
  HeaderContainer,
  LinesEffectLeft,
  LinesEffectRight,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LinesEffectLeft src="/line-left.svg" />
      <BlurEffect $left={-64} $top={-32} />

      <div>
        <img src="/logo.svg" alt="" />
      </div>
      <BlurEffect $right={-16} $top={-32} />
      <LinesEffectRight src="/line-right.svg" />
    </HeaderContainer>
  )
}
