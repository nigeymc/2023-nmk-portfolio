import Link from 'next/link'
import Image from 'next/image'
import style from './Card.module.scss'
import { publishedAt } from '../../HelperFunctions/helpers'

const Card = ({ postData }) => {
  const { image_url, title, subtitle, url, published_at } = postData
  const lastIndexOfSlash = url != undefined && url.lastIndexOf('/')
  const postPath = url.slice(lastIndexOfSlash)

  const datePublished = publishedAt(published_at)

  return (
    <Link
      as={`/post${postPath}`}
      href={`/post${postPath}`}
      className={style.card}
      title={`Read about ${title}`}
    >
      <div className={style.image}>
        {image_url && (
          <Image
            className={style.image}
            src={image_url}
            alt={`Blog post thumbnail for ${title}`}
            width={1200}
            height={1000}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+/H9GQAJewOrnloA8QAAAABJRU5ErkJggg=="
            placeholder="blur"
            loading="lazy"
          />
        )}
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <time dateTime={published_at}>Published on {datePublished}</time>
        <p className={style.description}>{subtitle}</p>
      </div>
    </Link>
  )
}

export { Card as default }
