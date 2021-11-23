import { Col, Container } from 'react-bootstrap'
import FirstCard from './FirstCard/index'
import SecondCard from './SecondCard/index'
import ThirdCard from './ThirdCard/index'
import styles from './styles.module.scss'
export function Cards() {
  return (
    <Container>
      <div className={styles.content + ' row'}>
        <Col md={4}>
          <FirstCard />
        </Col>
        <Col md={4}>
          <SecondCard />
        </Col>
        <Col md={4}>
          <ThirdCard />
        </Col>
      </div>
    </Container>
  )
}
