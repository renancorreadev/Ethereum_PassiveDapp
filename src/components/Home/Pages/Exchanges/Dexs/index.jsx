import styles from './styles.module.scss'
import { Row, Col } from 'react-bootstrap'
import bsc from '../../../../../assets/Exchanges/bsc.png'
import cmc from '../../../../../assets/Exchanges/cmc.png'
import coingecko from '../../../../../assets/Exchanges/coingecko.png'
import dextools from '../../../../../assets/Exchanges/dextools.png'
import pancakeswap from '../../../../../assets/Exchanges/pancakeswap.png'

export function Dexs() {
  return (
    <>
      <div className={styles.dexs + ' container'}>
        <Row>
          <Col md={4}>
            <div className="d-flex justify-content-center">
              <img className={styles.coingecko} src={coingecko} alt="" />
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center">
              <img className={styles.cmc} src={cmc} alt="" />
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center">
              <img className={styles.pancakeswap} src={pancakeswap} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="gr02 d-flex justify-content-end">
              <img className={styles.dextools} src={dextools} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="gr02 d-flex justify-content-start">
              <img className={styles.bsc} src={bsc} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
