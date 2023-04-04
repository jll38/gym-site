import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Divider
} from '@chakra-ui/react';

export default function About({ allPostsData}){
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
             </Head>
             <Container minH='55vh' maxW={'1000px'}>
                <article>
                    <section name="About">
                        <Heading>About MyWebClass.org</Heading>
                        <Divider mb='5'></Divider>
                        <Text>Welcome to MyWebClass.org, a foundation committed 
                         to revolutionizing education for the AI-driven world. 
                        As we navigate the challenges and opportunities 
                        of the Fourth Industrial Revolution, it is crucial to 
                         reimagine our educational practices and adopt a new paradigm 
                         that empowers our students with the knowledge and skills they 
                         need to flourish in an increasingly complex and interconnected
                         world</Text>
                     </section>
                     <section name="Our Mission">
                        <Heading my={'2'}>Our Mission</Heading>
                        At MyWebClass.org, our mission encompasses conducting research 
                        on effective strategies, developing resources and tools, offering 
                        professional development opportunities, and collaborating with 
                        schools and educators to foster a culture of continuous improvement, 
                        collaboration, and adaptability. By incorporating Agile and Lean 
                        principles into the classroom, we strive to support students' 
                        mental health by cultivating resilience, adaptability, and a 
                        sense of accomplishment.
                     </section>
                     <section name="Our Team">
                        <Heading my={'2'}>Our Team</Heading>
                        Our team is composed of experienced educators, researchers, and 
                        technologists who share a passion for transforming education. 
                        We bring diverse perspectives and expertise to our work, and 
                        we are dedicated to empowering educators with the knowledge and 
                        resources they need to succeed.
                     </section>
                     <section name="Partnerships">
                        <Heading my={'2'}>Partnerships and Affiliations</Heading>
                        We are proud to partner with schools, organizations,
                         and other stakeholders committed to transforming 
                         education. Our partnerships enable us to collaborate 
                         on initiatives that drive innovation in education 
                         and promote continuous improvement.
                     </section>
                     <section name="Partnerships">
                        <Heading my={'2'}>Agile & Lean Principles</Heading>
                        <Text>
                        Agile and Lean principles have been successfully 
                        applied in various industries to enhance productivity, 
                        efficiency, and customer satisfaction. In education, 
                        these principles can help foster student engagement, 
                        collaboration, and problem-solving skills. At MyWebClass.org, 
                        we are committed to promoting the integration of Agile and
                        Lean principles into educational approaches and supporting 
                        educators in implementing them effectively.
                        </Text>
                     </section>
                     <section name="Blog">
                        <Heading my={'2'}>Blog</Heading>
                        <Text>
                        Our blog provides insights, tips, and resources on Agile and
                        Lean principles in education, as well as updates on our 
                        initiatives and partnerships. We invite you to explore 
                        our blog and join the conversation on transforming education.
                        </Text>
                     </section>
                </article>
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
  