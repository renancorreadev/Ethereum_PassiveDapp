import styles from './styles.module.scss'
import { Player } from './Player/index'
import { Coins } from './Coins'

export function HowToBuy() {
  return (
    <>
      <div className={styles.content + ' container'}>
        <Player />
        <Coins />
      </div>
    </>
  )
}
