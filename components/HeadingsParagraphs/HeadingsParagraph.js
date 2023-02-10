import localFont from '@next/font/local'
import style from './HeadingsParagraph.module.scss'

const stolzl = localFont({
  src: '../../pages/Stolzl-Medium.woff2',
})

const HeadingsParagraph = ({ content }) => {
  const { heading, headingText } = content

  return (
    <div className={style.headingsParagraphWrapper}>
      <h2 className={stolzl.className}>{heading}</h2>
      {headingText && headingText.map((item, i) => <p key={i}>{item}</p>)}
    </div>
  )
}

export { HeadingsParagraph as default }
