import style from './HeroBlock.module.scss'
import { Poppins } from '@next/font/google'
import { Container, Row, Col } from 'react-grid'

const poppinsBold700 = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

const poppinsMedium500 = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const HeroBlock = ({ title, subTitle }) => {
  return (
    <section className={style.hero}>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} order={{ lg: 1, md: 1, xs: 2 }}>
            <div className={style.wrapper}>
              <h1 className={poppinsBold700.className}>{title}</h1>
              <p className={poppinsMedium500.className}>{subTitle}</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} order={{ lg: 2, md: 2, xs: 1 }}>
            <div className={style.headingImage}>
              <div className={style.heroImage}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export { HeroBlock as default }
