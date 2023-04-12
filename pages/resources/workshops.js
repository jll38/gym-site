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

export default function Workshops({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container minH='55vh' maxW={'1000px'}>
                <section name="Workshops Header">
                    <Stack
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}
                        direction={{ base: 'column', md: 'row' }}>
                        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                            <Heading>Webinars & Workshops</Heading>
                            <Text>Join our webinars and workshops to learn 
                                from experts and gain practical insights 
                                into Agile and Lean principles in education. 
                                Our webinars cover a range of topics and are 
                                designed to provide educators with actionable 
                                strategies for success</Text>
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
                '../images/webinar.png'
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
