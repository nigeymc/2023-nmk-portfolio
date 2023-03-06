import Link from 'next/link'
import Image from 'next/image'
import style from './Card.module.scss'

const Card = ({ content }) => {
  const {
    image,
    heading,
    text,
    labels,
    techStack,
    features,
    githubLabel,
    githubLink,
    websiteLink,
  } = content

  const [techStackLabel, featuresLabel] = labels

  return (
    <section className={style.card}>
      <div className={style.image}>
        <Image
          src={image}
          alt={`Thumbnail image of ${heading}`}
          layout="fill"
          loading="lazy"
        ></Image>
      </div>
      <div className={style.content}>
        <h3>{heading}</h3>
        <p>{text}</p>
        <h4>{techStackLabel}</h4>
        <p>{techStack}</p>
        <h4>{featuresLabel}</h4>
        <p>{features}</p>
        <div className={style.links}>
          <Link href={githubLink}>
            <span className={style.linkText}>{githubLabel}</span>
            <span className={style.chevron}></span>
          </Link>
          <Link target="_blank" href={websiteLink.trim()}>
            <span className={style.linkText}>{heading}</span>
            <span className={style.chevron}></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export { Card as default }
