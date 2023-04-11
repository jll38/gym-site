import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from './../../lib/articles'
import Link from 'next/link'
import Date from '../../components/date'
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
    HStack,
    others
} from '@chakra-ui/react';

export default function Articles({ allPostsData }) {
    const agileArticles = [];
    const neuroscienceArticles = [];
    const aiRevolutions = [];
    const innovativeTeaching = [];
    const cognitiveMentalHealth = [];
    const other = [];
    allPostsData.map((article, index) => {
        if (article.category === "agile-lean") {
            agileArticles.push(article);
        }
        else if (article.category === "neuroscience") {
            neuroscienceArticles.push(article);
        }
        else if (article.category === "ai-revolution") {
            aiRevolutions.push(article);
        }
        else if (article.category === 'innovative-teaching') {
            innovativeTeaching.push(article);
        }
        else if (article.category === 'mental-health') {
            cognitiveMentalHealth.push(article)
        }
        else {
            other.push(article);
        }
    })
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container minH={'52vh'} mx='10' w='1000px'>
                <Heading fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }} mb={'5'}>Academic Articles</Heading>
                <section className={` ${utilStyles.articleSections}`}>
                    <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Agile and Lean Principles in Education</Heading>
                    <Divider mb='5'></Divider>
                    <ul className={utilStyles.list}>
                        {agileArticles.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`articles/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>

                {!agileArticles.length ? (<></>) : (
                    <section className={` ${utilStyles.articleSections}`}>
                    <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Neuroscience and Education</Heading>
                    <Divider mb='5'></Divider>
                    <ul className={utilStyles.list}>
                        {neuroscienceArticles.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>)}         

                {!aiRevolutions.length ? (<></>) : (
                    <section className={` ${utilStyles.articleSections}`}>
                    <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>AI and the Fourth Industrial Revolution</Heading>
                    <Divider mb='5'></Divider>
                    <ul className={utilStyles.list}>
                        {aiRevolutions.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>)}

                {!innovativeTeaching.length ? (<></>) : (
                    <section className={` ${utilStyles.articleSections}`}>
                        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Innovative Teaching Methods</Heading>
                        <Divider mb='5'></Divider>
                        <ul className={utilStyles.list}>
                            {innovativeTeaching.map(({ id, date, title }) => (
                                <li className={utilStyles.listItem} key={id}>
                                    <Link href={`/posts/${id}`}>{title}</Link>
                                    <br />
                                    <small className={utilStyles.lightText}>
                                        <Date dateString={date} />
                                    </small>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {!cognitiveMentalHealth.length ? (<></>) : (
                    <section className={`${utilStyles.articleSections}`}>
                        <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Cognitive and Mental Health Challenges</Heading>
                        <Divider mb='5'></Divider>
                        <ul className={utilStyles.list}>
                            {cognitiveMentalHealth.map(({ id, date, title }) => (
                                <li className={utilStyles.listItem} key={id}>
                                    <Link href={`/posts/${id}`}>{title}</Link>
                                    <br />
                                    <small className={utilStyles.lightText}>
                                        <Date dateString={date} />
                                    </small>
                                </li>
                            ))}
                        </ul>
                    </section>)}

                {!other.length ? (<></>) : (<section className={` ${utilStyles.articleSections}`}>
                    <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>Miscellaneous</Heading>
                    <Divider mb='5'></Divider>
                    <ul className={utilStyles.list}>
                        {other.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>)}

            </Container>

        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
