import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../Link/Link.module.scss'

export const NavLink = ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  const pathnameParts = router.pathname && router.pathname.split('/')

  if (router.pathname === href || `/${pathnameParts[1]}` === href) {
    className = `${style.navLinkActive}`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export const SubNavLink = ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  const pathnameParts = router.pathname && router.pathname.split('/')

  if (router.pathname === href || `/${pathnameParts[1]}` === href) {
    className = `${style.subNavLinkActive}`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
