import React, { useState, useEffect } from 'react'
import style from './MediumPosts.module.scss'
import { Container, Row, Col } from 'react-grid'
import HeadingsParagraph from '../HeadingsParagraphs/HeadingsParagraph'
import Card from '../BlogPostCard/Card'

const MediumPosts = ({ posts, heading }) => {
  const { feed, items } = posts

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [feedData, setFeedData] = useState([])
  const [postData, setPostData] = useState([])

  useEffect(() => {
    setIsLoaded(true)
    setFeedData(feed)
    setPostData(items)
  }, [feed, items])

  return (
    <section className={style.mediumPostsContainer}>
      <Container>
        <Row>
          <HeadingsParagraph content={heading} />
        </Row>
        <Row>
          <div className={style.cardsContainer}>
            {postData.map((item, i) => (
              <Card key={i} postData={item} />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  )
}

export { MediumPosts as default }
