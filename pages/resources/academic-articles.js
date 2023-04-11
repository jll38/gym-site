import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from './../../lib/articles'
import Link from 'next/link'
import Date from '../../components/date'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Divider,
  HStack
} from '@chakra-ui/react';

export default function Articles({ allPostsData }) {
    const agileArticles = [];
    allPostsData.map((article, index) => {
        if(article.category === "agile-lean")
        {
            agileArticles.push(article);
        }
    })
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container minH={'52vh'} mx='10' w='1000px'>
        <Heading fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }} mb={'5'}>Academic Articles</Heading>
      <section className={` ${utilStyles.articleSections}`}>
        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Agile and Lean Principles in Education</Heading>
        <Divider mb='5'></Divider>
        <ul className={utilStyles.list}>
          {agileArticles.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`articles/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Neuroscience and Education</Heading>
        <Divider mb='5'></Divider>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>AI and the Fourth Industrial Revolution</Heading>
        <Divider mb='5'></Divider>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Innovative Teaching Methods</Heading>
        <Divider mb='5'></Divider>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Cognitive and Mental Health Challenges</Heading>
        <Divider mb='5'></Divider>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      
    </Container>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
