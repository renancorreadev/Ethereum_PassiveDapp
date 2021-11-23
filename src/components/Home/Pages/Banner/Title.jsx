import styles from './styles.module.css'
import { Col } from 'react-bootstrap'
import title from '../../../../assets/byPassive/Title.png'
export function Title() {
  return (
    <Col md={12}>
      <img className={styles.title} src={title} alt="" />
    </Col>
  )
}
