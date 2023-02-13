import style from './Footer.module.scss'
import { Container, Row, Col } from 'react-grid'
import Logo from '../Logo/Logo'
import FooterCopyrightAddress from './FooterCopyrightAddress'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <div aria-describedby="logo" className={style.footerLogo}>
              <Logo context={'footer'} />
            </div>
          </Col>
          <Col lg={9} md={9} sm={12}>
            <FooterCopyrightAddress />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export { Footer as default }
