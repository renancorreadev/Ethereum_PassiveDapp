import * as React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import Metamask from '../../../../../../assets/Coins/metamask.svg'
import Eth from '../../../../../../assets/Coins/ethereum.png'
import cake from '../../../../../../assets/Coins/cake.png'
import passive from '../../../../../../assets/Coins/passive.png'
import styled from 'styled-components'

export const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;

  img {
    width: 70%;
    height: 100% auto;
  }

  @media (max-width: 768px) {
    img {
      width: 15%;
    }
  }
`
export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 15px;
  margin-top: 25px;
`

export const TextContent = styled.div`
  position: relative;

  p {
    margin-right: 10px;
    margin-top: 25px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;

    a {
      text-decoration: none;
      color: #c38bff;
    }
  }
`

export function CardA() {
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 670,
            height: 240,
            backgroundColor: '#49099C',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={6}>
          <Row>
            <Col xs={12} md={4}>
              <Image>
                <img src={Metamask} alt="Metamask" />
              </Image>
            </Col>
            <Col xs={12} md={8}>
              <TextContent>
                <p>Download & setup MetaMask or TrustWallet</p>
                <p>
                  Download <a href="https://metamask.io/">MetaMask</a> (a crypto
                  wallet in form of a browser extension) or TrustWallet (an app
                  for your phone). Make sure you are connected to Ethereum
                  MainNet.{' '}
                </p>
              </TextContent>
            </Col>
          </Row>
        </Paper>
      </Box>
    </Content>
  )
}

export function CardB() {
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 670,
            height: 240,
            backgroundColor: '#49099C',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={6}>
          <Row>
            <Col xs={12} md={4}>
              <Image>
                <img src={Eth} alt="Eth" style={{ width: '40%' }} />
              </Image>
            </Col>
            <Col xs={12} md={8}>
              <TextContent>
                <p>Buy and send Ether to MetaMask</p>
                <p>
                  Buy Ether on an exchange (i.e. Binance, Kraken, Coinbase
                  etc.). Transfer the Ether to your MetaMask wallet address.
                  Ethereum addresses start with a "0x".{' '}
                </p>
              </TextContent>
            </Col>
          </Row>
        </Paper>
      </Box>
    </Content>
  )
}

export function CardC() {
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 670,
            height: 240,
            backgroundColor: '#49099C',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={6}>
          <Row>
            <Col xs={12} md={4}>
              <Image>
                <img src={cake} alt="Metamask" />
              </Image>
            </Col>
            <Col xs={12} md={8}>
              <TextContent>
                <p>Head on to PancakeSwap and swap for $Passive</p>
                <p>
                  <a href="https://pancakeswap.finance/">Click here </a> to head
                  on over to PancakeSwap or use this address to select Passive.
                  Set the slippage tolerance to 12% (sometimes it may be a bit
                  more, depending on how much demand there is).{' '}
                </p>
              </TextContent>
            </Col>
          </Row>
        </Paper>
      </Box>
    </Content>
  )
}

export function CardD() {
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 670,
            height: 240,
            backgroundColor: '#49099C',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={6}>
          <Row>
            <Col xs={12} md={4}>
              <Image>
                <img src={passive} alt="Metamask" />
              </Image>
            </Col>
            <Col xs={12} md={8}>
              <TextContent>
                <p>View $Passive and HODL</p>
                <p>
                  Swap Ether for Passive. Now you need to add Passive to your
                  MetaMask or Trust Wallet to view your $Passive. Lastly HODL!{' '}
                </p>
              </TextContent>
            </Col>
          </Row>
        </Paper>
      </Box>
    </Content>
  )
}
