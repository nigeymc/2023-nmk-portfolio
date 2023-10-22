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
  } = content

  const [techStackLabel, featuresLabel] = labels
  const techList = techStack.map((item, i) => <li key={i}>{item}</li>)
  const featuresList = features.map((item, i) => <li key={i}>{item}</li>)

  return (
    <div className={style.flipContainer}>
      <div class={style.flipper}>
        <div class={style.front}>
          <span className={style.imageLabel}>{heading}</span>
          <Image src={image} alt={heading} width={600} height={540} />
        </div>
        <div class={style.back}>
          <h3>{heading}</h3>
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

    // <section className={style.card}>
    //   <div className={style.imageContainer}>
    //     <Image
    //       src={image}
    //       alt={`Thumbnail image of ${heading}`}
    //       loading="lazy"
    //       layout="fill"
    //       className={style.image}
    //     ></Image>
    //   </div>
    //   <div className={style.content}>
    //     <h3>{heading}</h3>
    //     <p>{text}</p>
    //     <h4>{techStackLabel}</h4>
    //     <ul>
    //       {techList}
    //     </ul>
    //     <h4>{featuresLabel}</h4>
    //     <ul>{featuresList}</ul>
    //     <div className={style.links}>
    //       <Link href={githubLink}>
    //         <span className={style.linkText}>{githubLabel}</span>
    //         <span className={style.chevron}></span>
    //       </Link>
    //       <Link target="_blank" href={websiteLink.trim()}>
    //         <span className={style.linkText}>{heading}</span>
    //         <span className={style.chevron}></span>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  )
}

export { ProjectsCard as default }
