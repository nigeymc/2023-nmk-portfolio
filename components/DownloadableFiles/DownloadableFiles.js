import Link from 'next/link'
import style from './DownloadableFiles.module.scss'
import PropTypes from 'prop-types'

export const FileDownload = ({ fileDetails }) => {
  const { title, type, url, size, colour } = fileDetails
  const iconColour = colour === 'black' ? `${style.black}` : `${style.white}`
  return (
    <span className={style.outer}>
      <Link href={url} download target="_blank">
        <span className={`${style.downloadFileIcon} ${iconColour}`} />
        <span className={style.fileDetails}>
          <span className={style.title}>{title}</span>
          <span className={style.type}>
            {type == 'Microsoft Office - OOXML - Word Document'
              ? 'Word Document'
              : type}
          </span>
          <span className={style.size}>{size}</span>
        </span>
      </Link>
    </span>
  )
}
