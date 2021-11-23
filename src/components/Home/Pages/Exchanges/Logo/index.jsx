import { Row } from 'react-bootstrap'
import styles from './styles.module.css'
import logo from '../../../../../assets/Exchanges/Logo.svg'

export default function Logo() {
  return (
    <Row>
      <div className="d-flex justify-content-center">
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
    </Row>
  )
}
