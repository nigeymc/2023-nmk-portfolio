import { Poppins } from '@next/font/google'
import style from './ContactFooter.module.scss'
import { Container, Row, Col } from 'react-grid'
import SocialChannels from '../SocialChannels/SocialChannels'

const poppinsMedium500 = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const ContactFooter = () => {
  return (
    <section className={style.contactFooter}>
      <div className={style.footerContentContainer}>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <h2 className={poppinsMedium500.className}>Follow Me</h2>
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
