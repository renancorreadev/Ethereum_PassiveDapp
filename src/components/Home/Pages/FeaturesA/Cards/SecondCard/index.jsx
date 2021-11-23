import * as React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import styles from '../styles.module.scss'
export default function SecondCard() {
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
            <h2 className={styles.titleCard}>
              Unique Anti-Dump ‘Time locked wallet mechanism’
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '40px' }}>
            <p
              className={styles.subTitleCard + ' d-flex justify-content-center'}
            >
              All sales are limited to an aggregate summation of ≤ 0.2% of the
              total supply per wallet, every 24 hours. This is designed to
              hopefully mitigate volatility, limit large volume swing trading
              and whale manipulation.
            </p>
          </Col>
        </Row>
      </Paper>
    </Box>
  )
}
