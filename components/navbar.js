import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    MenuButton,
    Menu,
    MenuList,
    MenuItem
  } from '@chakra-ui/react';

  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box w='100%'>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
           
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'Helvetica'}
              color={useColorModeValue('gray.800', 'white')}>
              MyWebClass.org
            </Text>
  
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/'}>
              Home
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/about'}>
              About
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/blog'}>
              Blog
            </Button>
            <Menu>
            <MenuButton
              as={Button}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}>
              Resources
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href={'/resources/academic-articles'}>
                Academic Articles
              </MenuItem>
              <MenuItem as={Link} href={'/resources/downloadable-guides'}>
                Downloadable Guides
              </MenuItem>
              <MenuItem as={Link} href={'/resources/webinars-workshops'}>
                Webinars and Workshops
              </MenuItem>
              <MenuItem as={Link} href={'/resources/success'}>
                Success Stories
              </MenuItem>
            </MenuList>
          </Menu>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/services'}>
              Services
            </Button>
          </Stack>
        </Flex>
      </Box>
    );
  }
