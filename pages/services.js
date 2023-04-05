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

export default function Services({ allPostsData}){
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
             </Head>
             <Container minH='75vh' maxW={'1000px'}>
            <section name="Who we are">
               <Box textAlign={'center'} mt={'20'}>
                  <Box>
                     <Heading>Services</Heading>
                  </Box>
                  <Text>
                  At MyWebClass.org, we offer a range of services designed 
                  to help educators transform education for the AI-driven world. 
                  Our services include professional development, customized 
                  training and support, and more. Whether you are an individual 
                  educator or part of a school or organization, we have the resources
                   and expertise to help you succeed.
                  </Text>
               </Box>
            </section>
            <Box p={4} mt={'10'}>
               <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                  <Feature
                     title={'Professional Development'}
                     text={
                        'Our professional development services provide educators with the knowledge and skills they need to implement Agile and Lean principles in the classroom. We offer webinars, workshops, and other training opportunities that cover a range of topics.'
                     }
                  />
                  <Feature
                     title={'Customized Training'}
                     text={
                        'We offer customized training and support services tailored to your specific needs, whether you need help developing a curriculum or want guidance on implementing Agile and Lean principles in your classroom.'
                     }
                  />
                  <Feature
                     title={'Contact & Support'}
                     text={
                        'If you have any questions about our services or would like to learn more about how we can help you transform education, please don\'t hesitate to contact us. Our team is available to answer your questions and provide you with the guidance and support you need to succeed.'
                     }
                  />
                  

               </SimpleGrid>
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
  