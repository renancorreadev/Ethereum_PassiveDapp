import { Title } from './Title/index'
import { SubTitle } from './SubTitle/index'
import { SecondSubTitle } from './SecondSubTitle/index'
import { Cards } from './Cards/index'
import { ComentCard } from './ComentCard/index'
import { Container } from 'react-bootstrap'
export function FeaturesA() {
  return (
    <>
      <Container>
        <div className="content">
          <Title />
          <SubTitle />
          <SecondSubTitle />
          <Cards />
          <ComentCard />
        </div>
      </Container>
    </>
  )
}
