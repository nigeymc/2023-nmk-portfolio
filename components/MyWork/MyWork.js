import style from './MyWork.module.scss'
import { Container, Row, Col } from 'react-grid'
import HeadingsParagraph from '../HeadingsParagraphs/HeadingsParagraph'
import ProjectsCard from '../ProjectsCard/ProjectsCard'

const MyWork = ({ content }) => {
  const { heading, headingText, cards } = content

  return (
    <section className={style.myWorkBlock}>
      <Container>
        <Row>
          <HeadingsParagraph content={content} />
        </Row>
        <Row>
          <div className={style.cardsContainer}>
            {cards.map((item, i) => (
              <ProjectsCard key={i} content={item} />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  )
}

export { MyWork as default }
