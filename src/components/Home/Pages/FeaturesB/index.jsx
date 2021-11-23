import { Row, Container, Col } from 'react-bootstrap'
import n_1032 from '../../../../assets/FeaturesB/1032.png'
import tether from '../../../../assets/Coins/usdt.png'
import text from '../../../../assets/FeaturesB/text2.svg'
import styles from './styles.module.scss'
import styled from 'styled-components'

export const Tether = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 16%;
    height: auto;
  }
`
export const LTED = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 50px;

  img {
    width: 24%;
    height: auto;
  }
`
export const Title = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 90px;
    /* identical to box height */
    color: #ffffff;
  }
`
export const Text = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 24%;
    height: auto;
  }
`

export const Marketcap = styled.div`
  position: relative;
  top: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  h2 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
`

export function FeaturesB() {
  return (
    <Container>
      <div className={styles.content}>
        <Row>
          <Col md={12}>
            <Tether>
              <img src={tether} alt="tether" />
            </Tether>
          </Col>
          <Col md={12}>
            <LTED>
              <img src={n_1032} alt="n_1032" />
            </LTED>
          </Col>
          <Col md={12}>
            <Title>
              <h2>USDT Rewards</h2>
            </Title>
          </Col>
          <Col md={12}>
            <Text>
              <img src={text} alt="text" />
            </Text>
          </Col>
          <Col md={12}>
            <Marketcap>
              <h2>$4,652,715.755</h2>
            </Marketcap>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
