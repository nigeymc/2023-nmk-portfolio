import IntroBlock from '../components/IntroBlock/IntroBlock'
import MyWork from '../components/MyWork/MyWork'
import HeroBlock from '../components/HeroBlock/HeroBlock'
import MediumPosts from '../components/MediumPosts/MediumPosts'
import siteData from './site-data/site-data.json'

function Home({ posts }) {
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
      <MediumPosts posts={posts} heading={mediumPostsHeading} />
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mckenna.niall',
  ).catch((e) => {
    console.error('Error fetching data', e)
    return {
      props: { error: true }, // will be passed to the page component as props
    }
  })
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export { Home as default }
