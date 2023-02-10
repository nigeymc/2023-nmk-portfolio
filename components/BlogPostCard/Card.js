import Link from 'next/link'
import Image from 'next/image'
import style from './Card.module.scss'

const Card = ({ postData }) => {
  const {
    author,
    categories,
    content,
    description,
    enclosure,
    guid,
    link,
    pubDate,
    thumbnail,
    title,
  } = postData

  return (
    <Link target="_blank" href={guid} className={style.card}>
      <div className={style.image}>
        {thumbnail && (
          <Image
            className={style.image}
            src={thumbnail}
            alt="Featured post thumbanail"
            width={600}
            height={230}
            unoptimized
            priority
          />
        )}
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <p className={style.author}>Written by {author}</p>
        <time dateTime={pubDate}>Published on {pubDate.slice(0, 10)}</time>

        <div
          className={style.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <span>
          <span className={style.linkText}>Read this on Medium</span>
          <span className={style.chevron}></span>
        </span>
      </div>
    </Link>
  )
}

export { Card as default }
