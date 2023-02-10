import BodyInner from '../Body/BodyInner'
import HeaderNav from '../HeaderNav/HeaderNav'
import Footer from '../Footer/Footer'
import ContactFooter from '../Footer/ContactFooter'
import Sticky from 'react-stickky'
import style from '../Layout/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <BodyInner>
      <Sticky className={style.stickyStyle}>
        <HeaderNav />
      </Sticky>
      <main className={style.mainContent}>{children}</main>
      <ContactFooter />
      <Footer />
    </BodyInner>
  )
}
