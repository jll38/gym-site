import Testimonials from '../../components/testimonial';
import { getSortedPostsData } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';
import { siteTitle } from '../../components/layout';
import { Feature } from '../../components/feature';
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

export default function Success({ allPostsData}){
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
             </Head>
             <Container minH='55vh' maxW={'1000px'}>
            <section name="Who we are">
               <Box textAlign={'center'}>
               <Image
              alt={'mywebclass logo'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'200px'}
              src={
                '../images/logo-black.png'
              }
            />
                </Box>
                <Heading my={'2'} textAlign={'center'}>Success Stories</Heading>
                <Text textIndent={'40px'}>At MyWebClass.org, we are proud to have helped 
                countless educators and schools transform education 
                for the AI-driven world. Our success stories are a 
                testament to the power of Agile and Lean principles 
                in education, and to the dedication and hard work of 
                educators who are committed to making a difference in the 
                lives of their students. From increased student engagement 
                and collaboration to improved problem-solving skills and mental health, 
                our success stories demonstrate the impact that Agile and Lean principles 
                can have on education. We invite you to read our success stories and 
                learn how MyWebClass.org can help you transform education in your classroom 
                or school.</Text>
                </section>
            <Box mt={'10'}>
            <section name="Testimonials" >
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
  