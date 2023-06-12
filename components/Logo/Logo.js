import Link from 'next/link'
import style from './Logo.module.scss'
import { Poppins } from '@next/font/google'

const poppinsBold700 = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

const Logo = ({ context }) => {
  let useContext = context == 'header' ? `${style.header}` : `${style.footer}`

  return (
    <span className={style.logoWhite}>
      <Link className={`${poppinsBold700.className} ${useContext}`} href="/">
        NMK
      </Link>
      <p id="logo" className="visuallyHidden">
        Brand logo in plain text
      </p>
    </span>
  )
}

export { Logo as default }
