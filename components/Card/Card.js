import Link from 'next/link'
import Image from 'next/image'
import style from './Card.module.scss'
import { Col } from 'react-grid'

const Card = ({ content }) => {
  const {
    image,
    heading,
    text,
    techStack,
    features,
    githubLabel,
    githubLink,
    websiteLink,
  } = content

  let useContext =
    (heading.includes('JMK') && `${style.jmk}`) ||
    (heading.includes('Reservation') && `${style.calendar}`) ||
    null

  return (
    <section className={`${style.card} ${useContext}`}>
      <div className={style.image}>
        <Image
          src={image}
          alt={`Thumbnail image of ${heading}`}
          width={800}
          height={450}
          priority
        ></Image>
      </div>
      <div className={style.content}>
        <h3>{heading}</h3>
        <p>{text}</p>
        <p>{techStack}</p>
        <p>{features}</p>
        <div className={style.links}>
          <Link href={githubLink}>
            <span className={style.linkText}>{githubLabel}</span>
            <span className={style.chevron}></span>
          </Link>
          <Link href={websiteLink}>
            <span className={style.linkText}>{heading}</span>
            <span className={style.chevron}></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export { Card as default }
