import style from './IntroBlock.module.scss'
import { Container, Row, Col } from 'react-grid'
import { FileDownload } from '../DownloadableFiles/DownloadableFiles'
import HeadingsParagraph from '../HeadingsParagraphs/HeadingsParagraph'
import ProfilePic from '../ProfilePic/ProfilePic'

const IntroBlock = ({ fileDetails, content }) => {
  return (
    <section className={style.introBlock}>
      <div className={style.introBlockContainer}>
        <Container>
          <Row>
            <Col lg={9} md={9} sm={12}>
              <HeadingsParagraph content={content} />
              <FileDownload fileDetails={fileDetails} />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <ProfilePic imageSrc={content.profilePic} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export { IntroBlock as default }
