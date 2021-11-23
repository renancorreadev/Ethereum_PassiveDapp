import * as React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import styles from '../styles.module.scss'
export default function ThirdCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 355,
          height: 400,
          backgroundColor: '#49099C',
        },
      }}
    >
      <Paper elevation={6}>
        <Row>
          <Col
            md={12}
            className="d-flex justify-content-center"
            style={{ padding: '40px' }}
          >
            <h2 className={styles.titleCard}>Claim & or Re-invest</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '40px' }}>
            <p
              className={styles.subTitleCard + ' d-flex justify-content-center'}
            >
              Passive holders have the opportunity to either claim their Eth or
              claim and re-invest into Passive at a 10% discount.
            </p>
          </Col>
        </Row>
      </Paper>
    </Box>
  )
}
