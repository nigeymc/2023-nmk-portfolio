import { useState } from 'react'
import style from './HeaderNav.module.scss'
import { Container, Row, Col } from 'react-grid'
import Logo from '../Logo/Logo'
import { NavLink } from '../Link/Link'
import NavList from '../NavList/NavList'

const HeaderNav = () => {
  const header = `headerSize`

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  let toggle = sidebar ? `${style.showMenu}` : `${style.hideMenu}`

  return (
    <header className={style.headerNav}>
      <nav className={style.mainNav}>
        <div className={style.mobileMenu}>
          <input
            type="checkbox"
            className={style.hamburgerMenu}
            onChange={showSidebar}
            checked={sidebar && `unchecked`}
            aria-hidden="true"
          />
          <div className={style.bars} role="button" aria-controls="mobileMenu">
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
          </div>
        </div>
        <Container>
          <Row>
            <Col lg={8} md={8} sm={9}>
              <Logo context={'header'} />
            </Col>
            <Col lg={4} md={4} sm={3}>
              <ul
                className={`${style.desktopNav} ${style.menuNav} ${toggle}`}
                onClick={showSidebar}
              >
                <NavList />
              </ul>
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  )
}

export { HeaderNav as default }
