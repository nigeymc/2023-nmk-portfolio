import HeroBlock from '../components/HeroBlock/HeroBlock'
import MediumPosts from '../components/MediumPosts/MediumPosts'
import siteData from './site-data/site-data.json'

const Home = ({ loading, error, articleDataArr }) => {
  const { heroContent, postsHeading } = siteData

  return (
    <>
      <HeroBlock
        title={heroContent.title}
        subTitle={heroContent.subTitle}
        context={heroContent.context}
      />
      <MediumPosts
        mediumPostsHeading={postsHeading}
        cardsContent={articleDataArr}
        loading={loading}
        error={error}
      />
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const username = `mckenna.niall`
  const user_id = `dd8b42234ded`
  const url = `https://medium2.p.rapidapi.com/user/${user_id}/articles`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.customKey,
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

  const articleDataArr = []
  const articleContentArr = []
  for (const article_id of article_ids) {
    let article = await fetch(
      `https://medium2.p.rapidapi.com/article/${article_id}`,
      options,
    )
    const articleData = await article.json()
    articleDataArr.push(articleData)

    let content = await fetch(
      `https://medium2.p.rapidapi.com/article/${article_id}/content`,
      options,
    )
    const articleContent = await content.json()
    articleContentArr.push(articleContent)

    // console.log(articleDataArr)
  }

  return {
    props: {
      articleDataArr,
      articleContentArr,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export { Home as default }
