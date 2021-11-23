import { Row, Col } from 'react-bootstrap'
import { ImageContent } from './ImageContent'
import { SecondBanner } from './SecondBanner'

import styles from './styles.module.scss'
export function RewardsInfo() {
  return (
    <div className={styles.content + ' container'}>
      <Row>
        <Col xs={12} md={6}>
          <ImageContent />
        </Col>
        <Col xs={12} md={6}>
          <SecondBanner />
        </Col>
      </Row>
    </div>
  )
}
