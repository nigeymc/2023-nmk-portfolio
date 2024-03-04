import IntroBlock from '../components/IntroBlock/IntroBlock'
import MyWork from '../components/MyWork/MyWork'
import HeroBlock from '../components/HeroBlock/HeroBlock'
import HomepageFeed from '../components/HomepageFeed/HomepageFeed'

import siteData from './site-data/site-data.json'

const Home = ({ loading, error, dataFeed }) => {
  const {
    heroContent,
    fileDetails,
    introContent,
    myWorkContent,
    mediumPostsHeading,
  } = siteData

  return (
    <>
      <HeroBlock
        title={heroContent.title}
        subTitle={heroContent.subTitle}
        context={heroContent.context}
      />
      <IntroBlock fileDetails={fileDetails} content={introContent} />
      <MyWork content={myWorkContent} />
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

  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mckenna.niall`

  const res = await fetch(url)
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
  const dataFeed = data.items

  return {
    props: {
      dataFeed,
    },

    revalidate: 60 * 60 * 24, // 1 day in seconds
  }
}

export { Home as default }
