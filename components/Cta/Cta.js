import Link from 'next/link'
import style from './Cta.module.scss'

const Cta = ({ href }) => {
  return (
    <span className={style.cta}>
      <Link href={href}>Email us</Link>
    </span>
  )
}

export { Cta as default }
