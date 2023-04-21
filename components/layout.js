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
        <meta name="description" content="Empowering the Future of Education" />
        <meta name="keywords" content="agile, lean, methodology, principle, practice, practices, method, methodologies, agile methodology, agile methodologies, agile principle, agile principles, lean principle, lean principles, agile and lean principle, agile and lean principles, agile education, lean education, agile thinking, lean thinking, agile teaching, lean teaching, agile practice, lean practice, revolutionizing education, adaptability, improvement, continuous improvement, tailoring education, neuroscience, neuroplasticity, neuroscience and education, teaching, teaching methods, innovative teaching methods, educational approaches, educator, educators, supporting educators, provide educators, transforming education, classroom, school, learn, learn agile, learn lean, learning, students, engaging students, preparing students, empower students, student engagement, personalized learning, interdisciplinary learning, project-based, project-based learning, support, support mental health, supporting, supporting mental health, mental health, fourth industrial revolution, diverse, expertise, diverse expertise, diverse perspectives, diverse perspectives and expertise, technology, modern technology, modern education, teaching and learning, strategy, actionable strategy, effective strategy, artificial intelligence, AI, AI-driven world, webinar, webinars, join webinar, workshop, workshops, join workshop, training, customized training, services, support services, curriculum, develop curriculum, opportunities, training opportunities, collaborate, collaboration, initiative, initiatives, innovative, innovation, drive innovation, interconnected world, research, conduct research, conducting research, guides, guide for educators, free guides, download guides, download free guides, resource, resources, resource for educators, free resources, implement agile, implement lean, k-12, k-12 education, k-12 learning, k-12 teaching" />
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
