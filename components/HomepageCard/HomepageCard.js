import Link from 'next/link'
const DOMPurify = require('isomorphic-dompurify')
import style from './Card.module.scss'
import { publishedAt } from '../../HelperFunctions/helpers'

const Card = ({ postData }) => {
  const { title, pubDate, link, description, categories } = postData
  const lastIndexOfSlash = link != undefined && link.lastIndexOf('/')
  const postPath = link.slice(lastIndexOfSlash).slice(0, -31)
  const datePublished = publishedAt(pubDate)
  let sanitised = DOMPurify.sanitize(description, {
    USE_PROFILES: { html: true },
  })

  return (
    <Link
      as={`/post${postPath}`}
      href={`/post${postPath}`}
      className={style.card}
      title={`Read about ${title}`}
    >
      <div className={style.content}>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitised,
          }}
        />
        <h3>{title}</h3>
        <time dateTime={pubDate}>Published on {datePublished}</time>
        <ul className={style.categories}>
          {categories.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export { Card as default }
