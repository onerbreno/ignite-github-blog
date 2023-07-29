import styled from 'styled-components'

export const HeaderContainer = styled.header`
  overflow-x: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 8.375rem;
  background: ${(props) => props.theme.colors.base.profile};
  z-index: -1;
`
const LinesEffectBase = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const LinesEffectLeft = styled(LinesEffectBase)`
  left: 0;
`

export const LinesEffectRight = styled(LinesEffectBase)`
  right: 0;
`

interface BlurEffectProps {
  $top?: number
  $left?: number
  $right?: number
  $bottom?: number
}

export const BlurEffect = styled.div<BlurEffectProps>`
  width: 200px;
  height: 200px;
  background: #14589c;
  filter: blur(150px);

  position: absolute;
  top: ${(props) => props.$top && `${props.$top}px`};
  left: ${(props) => props.$left && `${props.$left}px`};
  bottom: ${(props) => props.$bottom && `${props.$bottom}px`};
  right: ${(props) => props.$right && `${props.$right}px`};
`
