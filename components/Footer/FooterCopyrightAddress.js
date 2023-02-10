import style from './FooterCopyrightAddress.module.scss'

const FooterCopyrightAddress = () => {
  return (
    <div className={style.footerGroup}>
      <span className={style.footerCopyright}>
        &copy; {new Date().getFullYear()} nmk.dev | Niall McKenna
      </span>
    </div>
  )
}

export { FooterCopyrightAddress as default }
