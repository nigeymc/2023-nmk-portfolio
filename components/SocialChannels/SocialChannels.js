import Link from 'next/link'
import style from './SocialChannels.module.scss'

const SocialChannels = () => {
  return (
    <ul className={style.socialList}>
      <li className={style.linkedIn}>
        <Link target="_blank" href={'https://www.linkedin.com/in/niallmckenna'}>
          <span className="visuallyHidden">LinkedIn</span>
        </Link>
      </li>
      <li className={style.github}>
        <Link target="_blank" href={'https://github.com/nigeymc'}>
          <span className="visuallyHidden">Github</span>
        </Link>
      </li>
      <li className={style.gitlab}>
        <Link target="_blank" href={'https://gitlab.com/niallmckenna'}>
          <span className="visuallyHidden">Gitlab</span>
        </Link>
      </li>
      <li className={style.medium}>
        <Link target="_blank" href={'https://medium.com/@mckenna.niall'}>
          <span className="visuallyHidden">Medium</span>
        </Link>
      </li>
    </ul>
  )
}

export { SocialChannels as default }
