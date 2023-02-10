import Link from 'next/link'
import style from './Logo.module.scss'
import localFont from '@next/font/local'

const stolzlBold = localFont({
  src: '../../pages/Stolzl-Bold.woff2',
})

const Logo = ({ context }) => {
  let useContext = context == 'header' ? `${style.header}` : `${style.footer}`

  return (
    <span className={style.logoWhite}>
      <Link className={`${stolzlBold.className} ${useContext}`} href="/">
        NMK
      </Link>
    </span>
  )
}

export { Logo as default }
