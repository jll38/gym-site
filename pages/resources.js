import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Divider
} from '@chakra-ui/react';

export default function Resources({ allPostsData}){
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
             </Head>
             <Container minH='55vh' maxW={'1000px'}>
                <article>
                    <section name="Resources">
                        <Heading>Resources</Heading>
                        <Divider mb='5'></Divider>
                        <Text></Text>
                     </section>
                     <section name="Academic Articles">
                        <Heading my={'2'}>Academic Articles</Heading>
                        <Text></Text>
                     </section>
                     <section name="Downloadable Guides">
                        <Heading my={'2'}>Downloadable Guides</Heading>
                        <Text></Text>
                     </section>
                     <section name="Workshops">
                        <Heading my={'2'}>Webinars and Workshops</Heading>
                     </section>
                     <section name="Success Stories">
                        <Heading my={'2'}>Success Stories</Heading>
                        <Text>
                        </Text>
                     </section>
                </article>
             </Container>
      </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  