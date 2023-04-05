import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Feature } from '../components/feature'
import Testimonials from '../components/testimonial'
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
               <Image
              alt={'Hero Image, Classroom full of students learning web development'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'400px'}
              src={
                'images/logo-black.png'
              }
            />
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
               <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                  <Feature
                     title={'Academic Articles'}
                     text={
                        'Explore the latest research on education and Agile/Lean principles with our collection of academic articles. Our selection includes peer-reviewed journals and publications from leading experts in the field.'
                     }
                  />
                  <Feature
                     title={'Downloadable Guides'}
                     text={
                        'Download our free guides and resources to learn how to implement Agile and Lean principles in your classroom. Our guides cover a range of topics, from project-based learning to Agile methodologies in K-12 education.'
                     }
                  />
                  <Feature
                     title={'Webinars & Workshops'}
                     text={
                        'Join our webinars and workshops to learn from experts and gain practical insights into Agile and Lean principles in education. Our webinars cover a range of topics and are designed to provide educators with actionable strategies for success.'
                     }
                  />
                  

               </SimpleGrid>
            </Box>
            <Box>
            <section name="Testimonials" >
               <Heading my={'2'} textAlign={'center'}>Success Stories</Heading>
               <Testimonials></Testimonials>
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
  