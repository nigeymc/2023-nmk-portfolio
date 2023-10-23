import Link from 'next/link'
import Image from 'next/image'
import style from './ProjectsCard.module.scss'

const ProjectsCard = ({ content }) => {
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
    status,
  } = content

  const [techStackLabel, featuresLabel] = labels
  const techList = techStack.map((item, i) => <li key={i}>{item}</li>)
  const featuresList = features.map((item, i) => <li key={i}>{item}</li>)

  return (
    <div className={style.flipContainer} tabIndex={0}>
      <div className={style.flipper}>
        <div className={style.front}>
          <span className={style.imageLabel}>
            <span>{heading}</span>
          </span>
          <Image
            src={image}
            alt={heading}
            width={600}
            height={540}
            quality="85"
            loading="lazy"
          />
        </div>
        <div className={style.back}>
          <h3>{heading}</h3>
          <span className={style.status}>
            <p>
              <em>{status}</em>
            </p>
          </span>
          <p>{text}</p>
          <h4>{techStackLabel}</h4>
          <ul>{techList}</ul>
          <h4>{featuresLabel}</h4>
          <ul>{featuresList}</ul>
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
      </div>
    </div>
  )
}

export { ProjectsCard as default }
