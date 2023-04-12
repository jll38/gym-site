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

export default function Training({ allPostsData}){
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container minH='55vh' maxW={'1000px'}>
                <section name="Professional Development Header">
                    <Stack
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}
                        direction={{ base: 'column', md: 'row' }}>
                        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                            <Heading>Customized Training & Support</Heading>
                            <Text>We offer customized training and support 
                              services tailored to your specific needs, 
                              whether you need help developing a curriculum or
                               want guidance on implementing Agile and Lean 
                               principles in your classroom.</Text>
                        </Stack>
                        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'MyWebClass.org training'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'400px'}
              src={
                'https://coursehorse.imgix.net/images/course/1334/main/borough_of_manhattan_community_college_53ae68660c645.jpg?auto=format%2Cenhance%2Ccompress&crop=entropy&fit=crop&h=220&ixlib=php-1.2.1&q=90&w=330'
              }
            />
          </Box>
        </Flex>
                    </Stack>
                </section>
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
  