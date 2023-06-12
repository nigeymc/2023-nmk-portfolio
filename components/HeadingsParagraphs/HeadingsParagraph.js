import { Poppins } from '@next/font/google'
import style from './HeadingsParagraph.module.scss'

const poppinsMedium500 = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const HeadingsParagraph = ({ content }) => {
  const { heading, headingText } = content

  return (
    <div className={style.headingsParagraphWrapper}>
      <h2 className={poppinsMedium500.className}>{heading}</h2>
      {headingText && headingText.map((item, i) => <p key={i}>{item}</p>)}
    </div>
  )
}

export { HeadingsParagraph as default }
