import styled from 'styled-components'

export const PostItemContainer = styled.li`
  display: flex;
  flex-direction: column;

  height: 260px;
  padding: 2rem;
  gap: 1.5rem;
  border-radius: 10px;

  background: ${(props) => props.theme.colors.base.post};
  border: 2px solid transparent;

  p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    -webkit-line-clamp: 4;

    font: ${(props) => props.theme.fonts.text.md};
  }

  &:hover {
    transition: border-color 0.3s;
    border: 2px solid ${(props) => props.theme.colors.base.label};
    background: ${(props) => props.theme.colors.base.post};
  }
`

export const PostHeader = styled.span`
  display: flex;
  align-items: start;
  gap: 2rem;

  h3 {
    color: ${(props) => props.theme.colors.base.title};
    font: ${(props) => props.theme.fonts.title.md};
  }

  time {
    white-space: nowrap;

    color: ${(props) => props.theme.colors.base.span};
    font: ${(props) => props.theme.fonts.text.sm};
  }
`
