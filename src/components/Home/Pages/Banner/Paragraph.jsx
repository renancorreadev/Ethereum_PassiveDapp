import styles from './styles.module.css'
import { Col } from 'react-bootstrap'

export function Paragraph() {
  return (
    <Col md={12}>
      <p className={styles.paragraph + ' d-flex justify-content-center'}>
        Passive tokens are the keys to your share of USDT held in the vault.
        Claim USDT
      </p>
    </Col>
  )
}
