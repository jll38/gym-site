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

export default function Development({ allPostsData}){
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
                            <Heading>Professional Development</Heading>
                            <Text>Our professional development 
                                services provide educators with 
                                the knowledge and skills they need 
                                to implement Agile and Lean principles
                                in the classroom. We offer webinars, 
                                workshops, and other training 
                                opportunities that cover a range of topics.</Text>
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
              alt={'A webinar taking place on the computer screen'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'400px'}
              src={
                'https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/0x0.jpg?format=jpg&width=1200'
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
  