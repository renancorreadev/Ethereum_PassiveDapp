import styled from 'styled-components'
import images from '../../../../../assets/RewardsInfo/image 1.png'
export const Content = styled.div`
  img {
    position: relative;
    width: 90%;
    height: 100% auto;
  }
`

export function ImageContent() {
  return (
    <>
      <Content>
        <img src={images} alt="RewardsInfo" />
      </Content>
    </>
  )
}
