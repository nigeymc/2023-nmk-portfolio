import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import style from './MediumPosts.module.scss'
import { Container, Row } from 'react-grid'
import HeadingsParagraph from '../HeadingsParagraphs/HeadingsParagraph'
import HomepageCard from '../HomepageCard/HomepageCard'

const MediumPosts = ({ loading, error, mediumPostsHeading, cardsContent }) => {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(loading)
  const [fetchError, setFetchError] = useState(error)
  const [dataFeed, setDataFeed] = useState(cardsContent)

  useEffect(() => {
    setIsLoaded(loading)
    setFetchError(error)
    setDataFeed(cardsContent)
  }, [loading, error, cardsContent])

  return (
    <section className={style.mediumPostsContainer}>
      <Container>
        <Row>
          <HeadingsParagraph content={mediumPostsHeading} />
        </Row>
        <Row>
          {fetchError && <p>Error fetching page content</p>}
          <div className={style.cardsContainer}>
            {dataFeed.map((item) => (
              <HomepageCard key={item.id} postData={item} />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  )
}

export { MediumPosts as default }
