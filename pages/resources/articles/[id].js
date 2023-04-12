import Layout from '../../../components/layout';
import { getAllPostIds, getPostData } from '../../../lib/articles';

import Head from 'next/head';
import Date from '../../../components/date';
import utilStyles from '../../../styles/utils.module.css';
import { Divider, Box, Heading, Text, OrderedList, UnorderedList, ListItem } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const ChakraUIRenderer = {
  h1: (props) => <Heading as="h1" size="2xl" my="5"{...props} />,
  h2: (props) => <Heading as="h2" size="xl" my="5"{...props} />,
  h3: (props) => <Heading as="h3" size="lg" my="5"{...props} />,
  h4: (props) => <Heading as="h4" size="md" my="5"{...props} />,
  h5: (props) => <Heading as="h5" size="sm" my="5"{...props} />,
  h6: (props) => <Heading as="h6" size="xs" my="5"{...props} />,
  p: (props) => <Text {...props} />,
  ol: (props) => <OrderedList pl="1.5rem" {...props} />,
  ul: (props) => <UnorderedList pl="1.5rem" {...props} />,
  li: (props) => <ListItem {...props} />,
  // Add more custom renderers for other elements as needed
};

export default function Article({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Box maxW='55%'>
        <Heading as="h1" size="xl" className={utilStyles.headingXl} >
          {postData.title}
        </Heading>
        <Divider />
        </Box>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <Box maxW="1000px">
          <ReactMarkdown
            components={ChakraUIRenderer}
            rehypePlugins={[rehypeRaw]}
          >
            {postData.contentHtml}
          </ReactMarkdown>
        </Box>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
