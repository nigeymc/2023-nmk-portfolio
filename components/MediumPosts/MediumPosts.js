import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import style from './MediumPosts.module.scss'
import { Container, Row, Col } from 'react-grid'
import HeadingsParagraph from '../HeadingsParagraphs/HeadingsParagraph'
import Card from '../BlogPostCard/Card'

const MediumPosts = ({ loading, error, mediumPostsHeading, cardsContent }) => {
  const router = useRouter()

  const [isLoaded, setIsLoaded] = useState(loading)
  const [fetchError, setFetchError] = useState(error)
  const [feedData, setFeedData] = useState([])

  useEffect(() => {
    setIsLoaded(loading)
    setFetchError(error)
    setFeedData(cardsContent)
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
            {router.pathname !== '/post'
              ? feedData
                  .slice(0, 6)
                  .map((item) => <Card key={item.id} postData={item} />)
              : feedData.map((item) => <Card key={item.id} postData={item} />)}
          </div>
        </Row>
      </Container>
    </section>
  )
}

export { MediumPosts as default }
