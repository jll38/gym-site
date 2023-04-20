import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navbar'
import Footer from './footer'

const name = '[Your Name]'
export const siteTitle = 'MyWebClass.org'
export const aboutTitle = 'MyWebClass.org | About'
export default function Layout({ children, home }) {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="Empowering the Future of Education" />
        <meta property="og:image" content="https://mywebclassorg.herokuapp.com/images/mywebclass_logo-1.png" />
        <meta property="og:title" content={siteTitle} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://mywebclassorg.herokuapp.com/images/mywebclass_logo-1.png" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header}>
        <Navbar></Navbar>
        {home ? (
          <>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
    </div>
    <Footer></Footer>
    </>
  )
}
