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

interface BlueEffectProps {
  top?: number
  left?: number
  right?: number
  bottom?: number
}

export const BlurEffect = styled.div<BlueEffectProps>`
  width: 200px;
  height: 200px;
  filter: blur(200px);

  background: #14589c;
  position: absolute;

  right: ${(props) => props.right && `${props.right}px`};
  left: ${(props) => props.left && `${props.left}px`};
  top: ${(props) => props.top && `${props.top}px`};
  bottom: ${(props) => props.bottom && `${props.bottom}px`};
`
