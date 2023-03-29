import { NavLink } from '../Link/Link'
import siteData from '../../pages/site-data/site-data.json'

const NavList = () => {
  const { nav } = siteData

  return nav.map((item, i) => (
    <li key={i}>
      <NavLink href={item.url}>
        <span>{item.title}</span>
      </NavLink>
    </li>
  ))
}

export { NavList as default }
