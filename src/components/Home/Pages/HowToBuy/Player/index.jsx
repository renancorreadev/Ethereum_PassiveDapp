import { Row, Col } from 'react-bootstrap'
import styles from '../styles.module.scss'
import poster from '../../../../../assets/videoplayer.png'

export function Player() {
  return (
    <>
      <Row>
        <Col xs={12} md={12}>
          {' '}
          <div
            className={styles.videoPlayer + ' d-flex justify-content-center'}
          >
            <video
              className=""
              poster={poster}
              width="670"
              height="292"
              controls
            >
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className={styles.videoPlayer + ' d-flex justify-content-center'}
          >
            <video
              className=""
              poster={poster}
              width="670"
              height="292"
              controls
            >
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>
    </>
  )
}
