import style from './HeroBlock.module.scss'
import localFont from '@next/font/local'
import { Container, Row, Col } from 'react-grid'

const stolzlBold = localFont({
  src: '../../pages/Stolzl-Bold.woff2',
})

const stolzlRegular = localFont({
  src: '../../pages/Stolzl-Regular.woff2',
})

const HeroBlock = ({ title, subTitle }) => {
  return (
    <section className={style.hero}>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} order={{ lg: 1, md: 1, xs: 2 }}>
            <div className={style.wrapper}>
              <h1 className={stolzlBold.className}>{title}</h1>
              <p className={stolzlRegular.className}>{subTitle}</p>
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
