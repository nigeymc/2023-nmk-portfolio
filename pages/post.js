import HeroBlock from '../components/HeroBlock/HeroBlock'
import HomepageFeed from '../components/HomepageFeed/HomepageFeed'
import siteData from './site-data/site-data.json'

const Post = ({ loading, error, dataFeed }) => {
  const { heroContent, mediumPostsHeading } = siteData

  return (
    <>
      <HeroBlock
        title={heroContent.title}
        subTitle={heroContent.subTitle}
        context={heroContent.context}
      />
      <HomepageFeed
        mediumPostsHeading={mediumPostsHeading}
        cardsContent={dataFeed}
        loading={loading}
        error={error}
      />
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mckenna.niall`

  const getFeed = await fetch(feedUrl)
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

  const postsData = await getFeed.json()
  const dataFeed = postsData.items

  const user_id = `dd8b42234ded`
  const url = `https://medium2.p.rapidapi.com/user/${user_id}/articles`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'medium2.p.rapidapi.com',
    },
  }

  const res = await fetch(url, options)
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
  const articleContentArr = []

  for (const article_id of article_ids) {
    let content = await fetch(
      `https://medium2.p.rapidapi.com/article/${article_id}/content`,
      options,
    )
    const articleContent = await content.json()
    articleContentArr.push(articleContent)
  }

  return {
    props: {
      dataFeed,
      articleContentArr,
    },

    revalidate: 60 * 60 * 24, // 1 day in seconds
  }
}

export { Post as default }
