import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function Button() {
  return (
    <div className="container box_button d-flex justify-content-center">
      <Link to="/passive_web/swap">
        <button className={styles.button + ' d-flex justify-content-center'}>
          <span className={styles.textButton}>Start Swapping </span>
        </button>
      </Link>
    </div>
  )
}
