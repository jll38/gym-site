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
    FormControl,
    FormLabel,
    Input,
    Textarea
} from '@chakra-ui/react';

export default function Development({ allPostsData }) {
    return (
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
                            <Heading>Contact</Heading>
                            <Text>If you have any questions about our
                                services or would like to learn more about
                                how we can help you transform education,
                                please don't hesitate to contact us.
                                Our team is available to answer your
                                questions and provide you with the guidance
                                and support you need to succeed.</Text>
                        </Stack>
                        <Flex
                            flex={1}
                            justify={'center'}
                            align={'center'}
                            position={'relative'}
                            w={'full'}>
                            <Box
                                position={'relative'}
                                height={'600px'}
                                rounded={'2xl'}
                                boxShadow={'2xl'}
                                width={'full'}
                                p={'20px'}
                                >
                                <FormControl>
                                    <FormLabel fontSize={{md: 'lg', lg: 'xl', xl : '2xl'}}>Name</FormLabel>
                                    <Input type='text' placeholder='John Doe'></Input>
                                    <FormLabel fontSize={{md: 'lg', lg: 'xl', xl : '2xl'}}>Email</FormLabel>
                                    <Input type='text' placeholder='example@example.com'></Input>
                                    <FormLabel fontSize={{md: 'lg', lg: 'xl', xl : '2xl'}}>Message</FormLabel>
                                    <Textarea h='250px' resize={'none'}></Textarea>
                                    <Button>Send</Button>
                                </FormControl>
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
