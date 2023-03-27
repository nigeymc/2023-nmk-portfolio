import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col } from 'react-grid'
import style from './post.module.scss'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import SharePost from '../../components/SharePost/SharePost'

const Post = ({ slug, loading, error, title, url, markdown }) => {
  const [isLoaded, setIsLoaded] = useState(loading)
  const [fetchError, setFetchError] = useState(null)
  const [postMD, setPostMD] = useState(markdown)
  const [mediumUrl, setMediumUrl] = useState(url)
  const [mediumTitle, setMediumTitle] = useState(title)

  useEffect(() => {
    setIsLoaded(loading)
    setFetchError(error)
    setPostMD(markdown)
    setMediumUrl(url)
    setMediumTitle(title)
  }, [loading, error, markdown, title, url])

  const { isFallback } = useRouter()

  if (isLoaded && isFallback) {
    return <LoadingSpinner />
  }

  return (
    <section className={style.postPage}>
      <Container>
        <Row>
          <Col xs={12} md={1} lg={1} offset={{ xs: 0, md: 1, lg: 1 }}>
            <SharePost
              url={`https://nmk.dev/post/${slug}`}
              size={32}
              round={true}
            />
          </Col>
          <Col xs={12} md={10} lg={10}>
            <div className={style.postContainer}>
              <Link href={`/post`} className={style.backToAllPosts}>
                Go back to all posts
              </Link>
              {fetchError && <p>Error fetching page content</p>}
              <ReactMarkdown>{postMD}</ReactMarkdown>
              <hr />
              <p className={style.outerLink}>
                <Link href={`${mediumUrl}`} target="_blank">
                  <strong>{mediumTitle}</strong> was originally published on
                  Medium.com by Niall McKenna
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const user_id = `dd8b42234ded`
  const endpoint = `https://medium2.p.rapidapi.com/user/${user_id}/articles`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'medium2.p.rapidapi.com',
    },
  }

  const res = await fetch(endpoint, options)
    .catch((e) => {
      console.error('Error fetching data', e)
      return {
        props: { error: true }, // will be passed to the page component as props
      }
    })
    .finally(() => {
      return {
        props: { loading: false }, // will be passed to the page component as props
      }
    })

  const data = await res.json()
  const article_ids = data.associated_articles

  const articleDataArr = []
  const articleContentArr = []
  for (const article_id of article_ids) {
    let article = await fetch(
      `https://medium2.p.rapidapi.com/article/${article_id}`,
      options,
    )
    const articleData = await article.text()
    articleDataArr.push(JSON.parse(articleData))

    let content = await fetch(
      `https://medium2.p.rapidapi.com/article/${article_id}/markdown`,
      options,
    )
    const articleContent = await content.text()
    let parsedContent = JSON.parse(articleContent)
    articleContentArr.push(parsedContent)
  }

  articleContentArr.forEach((item, index) => {
    item.id = article_ids[index]
  })

  const filteredContent = articleContentArr.filter((item) => {
    if (params.slug.endsWith(item.id)) {
      return item
    }
  })
  const [postContent] = filteredContent
  const { markdown } = postContent

  const filteredData = articleDataArr.filter((item) => {
    if (params.slug.endsWith(item.id)) {
      return item
    }
  })
  const [postData] = filteredData

  if (!markdown && !postData) {
    return {
      notFound: true,
    }
  }
  const { url, title } = postData

  const { slug } = params

  return {
    props: {
      slug,
      title,
      url,
      markdown,
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 86400, // In seconds
  }
}

export const getStaticPaths = async () => {
  const user_id = `dd8b42234ded`
  const url = `https://medium2.p.rapidapi.com/user/${user_id}/articles`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'medium2.p.rapidapi.com',
    },
  }

  const res = await fetch(url, options).catch((e) => {
    console.error('Error fetching data', e)
    return {
      props: { error: true }, // will be passed to the page component as props
    }
  })

  const data = await res.json()
  const article_ids = data.associated_articles

  const articleDataArr = []

  for (const article_id of article_ids) {
    let article = await fetch(
      `https://medium2.p.rapidapi.com/article/${article_id}`,
      options,
    )
    const articleData = await article.json()
    articleDataArr.push(articleData)
  }

  const pathsWithParams = articleDataArr.map((item) => ({
    params: { slug: item.url },
  }))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export { Post as default }
