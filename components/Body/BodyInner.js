import style from './bodyInner.module.scss'

const BodyInner = ({ children }) => {
  return <div className={style.bodyInner}>{children}</div>
}

export { BodyInner as default }
