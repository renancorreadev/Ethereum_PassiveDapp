import { ButtonBuy } from './ButtonBuy'
import { ButtonClaim } from './ButtonClaim'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles.module.css'

export function Buttons() {
  return (
    <div className={styles.btns + ' d-flex justify-content-center'}>
      <ButtonBuy />
      <ButtonClaim />
    </div>
  )
}
