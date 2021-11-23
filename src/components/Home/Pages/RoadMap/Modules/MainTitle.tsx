import styled from 'styled-components'
import title from '../../../../../assets/Our Rodadmap/Title.png'

export const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 50%;
    height: auto;
    margin-top: 90px;
  }
`

export function MainTitle() {
  return (
    <Title>
      <img src={title} alt="title" />
    </Title>
  )
}
