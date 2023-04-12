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
    List,
    ListItem
} from '@chakra-ui/react';

export default function Guides({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container minH='55vh' maxW={'1000px'}>
                <section name="Guides Header">
                    <Stack
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}
                        direction={{ base: 'column', md: 'row' }}>
                        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                            <Heading>Downloadable Guides</Heading>
                            <Text>Download our free guides and resources 
                                to learn how to implement Agile and 
                                Lean principles in your classroom. 
                                Our guides cover a range of topics, 
                                from project-based learning to Agile 
                                methodologies in K-12 education.</Text>
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
              alt={'Downloadable guide being displayed on computer screen'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'400px'}
              src={
                '../images/downloadable-guides.png'
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
