import styles from './styles.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
export function ComentCard() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <p className={styles.comemnt}>
            A transaction contribution of 1% is added towards furthering the
            development & maintanence of the project long into the future.
          </p>
          )
        </Col>
      </Row>
    </Container>
  )
}
