import styles from './styles.module.scss'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Passive from '../../assets/logo.svg'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Logo = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100% auto;
`
export function Footer() {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')
  const onSubmit = (data) => setResult(JSON.stringify(data))

  return (
    <div className={styles.bg + ' container-fluid'}>
      <footer className="container">
        <Row>
          <Col md={2}>
            <Logo src={Passive} alt="passive logo" />
          </Col>
          <Col md={2}>
            <h5 className={styles.title}>Contact</h5>
            <p className={styles.parag}>Ferneberga House</p>
            <p className={styles.parag}>Alexandra Road</p>
            <p className={styles.parag}>Farnborough </p>
            <p className={styles.parag}>GU14 6DQ</p>
          </Col>
          <Col md={2}>
            <h5 className={styles.title}>Connect</h5>
            <p className={styles.parag}>hello@passive </p>
            <p className={styles.parag}>+44 (0)330 133 0770</p>
          </Col>
          <Col md={3}>
            <h5 className={styles.title}>Small Print</h5>
            <p className={styles.parag}>Privacy Policy</p>
            <p className={styles.parag}>Terms & Conditions</p>
            <p className={styles.parag}>Hosting Terms & Conditions</p>
            <p className={styles.parag}>Website Terms & Conditions</p>
            <p className={styles.parag}>Manage Cookies</p>
          </Col>
          <Col md={3}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h5 className={styles.formTitle}>Subscribe to our newsletter</h5>
              <input clasName={styles.inputbutton} {...register('you mail')} />

              <p>{result}</p>
              <button type="submit">
                <span>SUBSCRIBE</span>
              </button>
            </form>
          </Col>
        </Row>
      </footer>
    </div>
  )
}
