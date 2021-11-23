import * as React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import styles from '../styles.module.scss'

export default function FirstCard() {
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
              10% Eth Reflections deposited into the Passive Vault
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '40px' }}>
            <p
              className={styles.subTitleCard + ' d-flex justify-content-center'}
            >
              10% of every buy/sell is deposited into the Passive Vault ready to
              be redistributed and claimed by Passive holders who earn & claim
              Eth.
            </p>
          </Col>
        </Row>
      </Paper>
    </Box>
  )
}
