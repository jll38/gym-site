import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Button,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import {   HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%">
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
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
        />
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'Helvetica'}
            color={useColorModeValue('gray.800', 'white')}>
            MyWebClass.org
          </Text>
        </Flex>

        <Collapse in={!isOpen} animateOpacity>
          <Wrap
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            spacing={6}
            align={'center'}>
            <WrapItem>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'/'}>
                Home
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'/about'}>
                About
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'/blog'}>
                Blog
              </Button>
            </WrapItem>
            <WrapItem>
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
                  <MenuItem as={Link} href={'/resources/guides'}>
                    Downloadable Guides
                  </MenuItem>
                  <MenuItem as={Link} href={'/resources/workshops'}>
                    Webinars and Workshops
                  </MenuItem>
                  <MenuItem as={Link} href={'/resources/success'}>
                    Success Stories
                  </MenuItem>
                </MenuList>
              </Menu>
            </WrapItem>
            <WrapItem>
              <Menu>
                <MenuButton
                  as={Button}
                  fontSize={'sm'}
                  fontWeight={400}
                  variant={'link'}>
                  Services
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href={'/services/development'}>
                    Professional Development
                  </MenuItem>
                  <MenuItem as={Link} href={'/services/training'}>
                    Customized Training & Support
                  </MenuItem>
                  <MenuItem as={Link} href={'/services/contact'}>
                    Contact
                  </MenuItem>
                </MenuList>
              </Menu>
            </WrapItem>
          </Wrap>
        </Collapse>
      </Flex>
    </Box>
  );
}
