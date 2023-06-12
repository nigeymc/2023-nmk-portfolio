import Head from 'next/head'
import Script from 'next/script'
import { Lato } from '@next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'
import '../styles/globals.scss'
import Layout from '../components/Layout/Layout'
import siteData from './site-data/site-data.json'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  fallback: ['sans-serif'],
})

function MyApp({ Component, pageProps }) {
  const { seo } = siteData

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LSC02Z7B9N"
        id="g-tag"
      />
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag("js", new Date()); gtag("config", "G-LSC02Z7B9N");`,
          }}
        />
        <meta charSet="UTF-8" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seo.ogImage} />
        <meta name="GOOGLEBOT" content="ALL, NOARCHIVE" />
        <meta name="SLURP" content="NOARCHIVE" />
        <meta name="MSNBOT" content="NOARCHIVE" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/meta/manifest.json" />
      </Head>
      <section className={lato.className}>
        <Layout>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </Layout>
      </section>
    </>
  )
}

export default MyApp
