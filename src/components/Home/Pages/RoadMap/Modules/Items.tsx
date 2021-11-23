import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import circle_disable from '../../../../../assets/circles/Disable.png'
import circle_enable from '../../../../../assets/circles/Enable.png'

export const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;

  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: #ffffff;
  }
`
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
`
export const Content = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  padding-top: 15px;

  p {
    margin-top: 10px;
    margin-left: 4px;
  }

  img {
    width: 10%;
    height: 100%auto;
  }
`
export function Items() {
  return (
    <MainContent>
      <Row>
        <Col md={4}>
          <Title>
            <h3>Quarter 3 2021</h3>
          </Title>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>

          <Content>
            <img src={circle_disable} alt="" />
            <p> Liquidity locked</p>
          </Content>

          <Content>
            <img src={circle_disable} alt="" />
            <p> Liquidity locked</p>
          </Content>
        </Col>
        <Col md={4}>
          <Title>
            <h3>Quarter 3 2021</h3>
          </Title>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>

          <Content>
            <img src={circle_disable} alt="" />
            <p> Liquidity locked</p>
          </Content>

          <Content>
            <img src={circle_disable} alt="" />
            <p> Liquidity locked</p>
          </Content>
        </Col>
        <Col md={4}>
          <Title>
            <h3>Quarter 3 2021</h3>
          </Title>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>
          <Content>
            <img src={circle_enable} alt="" />
            <p> Liquidity locked</p>
          </Content>

          <Content>
            <img src={circle_disable} alt="" />
            <p> Liquidity locked</p>
          </Content>

          <Content>
            <img src={circle_disable} alt="" />
            <p> Liquidity locked</p>
          </Content>
        </Col>
      </Row>
    </MainContent>
  )
}
