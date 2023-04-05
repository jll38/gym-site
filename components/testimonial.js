import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  };

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};


const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Transformed My Classroom</TestimonialHeading>
              <TestimonialText>
              Implementing Agile and Lean principles in my classroom has been a game-changer, 
              thanks to MyWebClass.org. The downloadable guides and webinars 
              have given me the practical tools and strategies to engage my students 
              and foster a culture of collaboration and adaptability. I can't recommend this 
              foundation enough.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media.istockphoto.com/id/1128967676/photo/cheerful-senior-businesswoman-in-glasses-looking-at-camera-in-office.jpg?s=612x612&w=0&k=20&c=sEEKNAI3Pl18UIugUZyTPgkNoz4iPyScd5mFIlzHJsI='
              }
              name={'Jane Cooper'}
              title={'Professor at CalTech'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Valuable Resource for Educators</TestimonialHeading>
              <TestimonialText>
              MyWebClass.org is an invaluable resource for educators looking to transform education for the AI-driven world. The academic articles and webinars are informative and insightful, and the downloadable guides provide practical guidance for implementing Agile and Lean principles in the classroom. I have recommended this foundation to all my colleagues and will continue to do so.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://tangledlilac.com/wp-content/uploads/2021/05/Flagstaff-Sedona-Real-Estate-Photographer_1025-1-683x1024.jpg'
              }
              name={'John Doe'}
              title={'Professor at NJIT'}
            />
          </Testimonial>
        </Stack>
  );
}