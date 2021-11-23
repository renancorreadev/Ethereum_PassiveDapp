import styles from './styles.module.css'
import { Row, Col, Container } from 'react-bootstrap'

export function SubTitle() {
  return (
    <>
      <Col md={12}>
        <Container>
          <Row>
            <Col xs={12}>
              {' '}
              <p className={styles.subtitle + ' d-flex justify-content-center'}>
                The Passive Protocol is a Community inspired DeFI Experiment
              </p>
            </Col>
            <Col xs={12}>
              <p
                className={
                  styles.subtitle_02 + ' d-flex justify-content-center'
                }
              >
                {' '}
                built on Binance Smart Chain
              </p>

              <p
                className={
                  styles.subtitle_mobile + ' d-flex justify-content-center'
                }
              >
                The Passive Protocol is a Community inspired DeFI Experiment,
                built on Binance Smart Chain
              </p>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  )
}
