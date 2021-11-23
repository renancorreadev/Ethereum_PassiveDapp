import { Row, Col } from 'react-bootstrap'
import { MainTitle } from './Modules/MainTitle'
import { Items } from './Modules/Items'

export function Roadmap() {
  return (
    <div className="container">
      <Row>
        <Col md={12}>
          <MainTitle />
        </Col>
      </Row>
      <Items />
    </div>
  )
}
