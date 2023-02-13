import ContactForm from '../components/ContactForm/ContactForm'
import HeroBlock from '../components/HeroBlock/HeroBlock'
import siteData from './site-data/site-data.json'

export default function ContactMe() {
  const { heroContent, contactFormHeading } = siteData

  return (
    <>
      <HeroBlock
        title={heroContent.title}
        subTitle={heroContent.subTitle}
        context={heroContent.context}
      />
      <ContactForm content={contactFormHeading} />
    </>
  )
}
