import localFont from '@next/font/local'
import style from './ContactFooter.module.scss'
import { Container, Row, Col } from 'react-grid'
import SocialChannels from '../SocialChannels/SocialChannels'

const stolzl = localFont({
  src: '../../pages/Stolzl-Medium.woff2',
})

const ContactFooter = () => {
  return (
    <section className={style.contactFooter}>
      <div className={style.footerContentContainer}>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <h2 className={stolzl.className}>My Socials</h2>
              <p>You can find me on the following social channels</p>
              <SocialChannels />
            </Col>
            <Col lg={8} md={6} sm={12}></Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export { ContactFooter as default }
