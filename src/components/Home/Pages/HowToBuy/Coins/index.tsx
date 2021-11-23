import { Row, Col } from 'react-bootstrap'
import { CardA, CardB, CardC, CardD } from './Cards'

export function Coins() {
  return (
    <>
      <Row>
        <Col xs={12} md={12}>
          <CardA />
        </Col>
        <Col xs={12} md={12}>
          <CardB />
        </Col>

        <Col xs={12} md={12}>
          <CardC />
        </Col>

        <Col xs={12} md={12}>
          <CardD />
        </Col>
      </Row>
    </>
  )
}
