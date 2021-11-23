import { Title } from './Title'
import { SubTitle } from './Subtitle'
import { Paragraph } from './Paragraph'
import { Buttons } from './Buttons/index'
import styles from './styles.module.css'

export function Banner() {
  return (
    <>
      {/* TITLE & SUBTITLE AND PARAGRAPH*/}
      <div className={styles.container_Banner}>
        <Title />
        <SubTitle />
        <Paragraph />
        <Buttons />
      </div>
    </>
  )
}
