import React, { useState, useEffect } from 'react'
import style from './Post.module.scss'
import { Container, Row, Col } from 'react-grid'
import HeadingsParagraph from '../HeadingsParagraphs/HeadingsParagraph'

const PostContent = ({ postsContent }) => {
  // console.log(postsContent)

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [feedData, setFeedData] = useState([])
  const [postData, setPostData] = useState([])

  useEffect(() => {
    setIsLoaded(true)
    // setFeedData(cardsContent)
    setPostData(postsContent)
  }, [postsContent])

  return (
    <section className={style.mediumPostsContainer}>
      <Container>
        <Row>{/* <HeadingsParagraph content={heading} /> */}</Row>
        <Row>
          {/*<div
            className={style.description}
            dangerouslySetInnerHTML={{ __html: Object.values(postsContent) }}
          />*/}
        </Row>
      </Container>
    </section>
  )
}

export { PostContent as default }
