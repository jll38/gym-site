import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Feature } from '../components/feature'
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
   SimpleGrid,
} from '@chakra-ui/react';

export default function Resources({ allPostsData}){
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
             </Head>
             <Container minH='55vh' maxW={'1000px'}>
            <section name="Who we are">
               <Box textAlign={'center'} mt={'20'}>
                  <Box>
                     <Heading>Resources</Heading>
                  </Box>
                  <Text>
                     At MyWebClass.org we provide the resources to help
                     instructors reimagine educational practices. Our resouces
                     allow for a new paradigm that empowers our students with the 
                     knowledge and skills they need to flourish in an increasingly 
                     complex and interconnected world.
                  </Text>
               </Box>
            </section>
            <Box p={4} mt={'10'}>
               <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                  <Feature
                     title={'Academic Articles'}
                     text={
                        'Placeholder'
                     }
                  />
                  <Feature
                     title={'Downloadable Guides'}
                     text={
                        'Placeholder'
                     }
                  />
                  <Feature
                     title={'Webinars & Workshops'}
                     text={
                        'Placeholder'
                     }
                  />
                  

               </SimpleGrid>
            </Box>
            <Box>
            <section name="Testimonials" >
               <Heading my={'2'} textAlign={'center'}>Success Stories</Heading>
               
            </section>
            </Box>
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
  