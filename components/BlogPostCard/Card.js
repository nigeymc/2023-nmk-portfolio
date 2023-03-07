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
    <Link
      target="_blank"
      href={guid}
      className={style.card}
      title={`Read my blog post about ${title} on Medium.com`}
    >
      <div className={style.image}>
        {thumbnail && (
          <Image
            className={style.image}
            src={thumbnail}
            alt={`Blog post thumbnail for ${title}`}
            unoptimized
            priority
            layout="fill"
          />
        )}
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <p className={style.author}>
          Written by {author}
          <time dateTime={pubDate}> on {pubDate.slice(0, 10)}</time>
        </p>

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
