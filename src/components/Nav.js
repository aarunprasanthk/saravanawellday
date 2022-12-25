import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Button,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaAlignJustify } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("#0d3b66");
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const dispatch = useDispatch()
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  const handleLogoutAction = (e) => {
    e.preventDefault()
    dispatch(authActions.logout())
  }

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >
      <Text fontSize="xl" fontWeight="bold" color="azure">
        Wellday Sarvanana
      </Text>

      <Spacer />

      <Flex alignItems="center">
      <Button mr="10" colorScheme="red"
          variant="solid" onClick={handleLogoutAction}>
          Logout
        </Button>
        <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      
        {isLargerThanMD ? (
          <>
            <IconButton ref={ref} onClick={onOpen}>
              <Icon as={FaAlignJustify} />
            </IconButton>
          </>
        ) : (
          <IconButton ref={ref} onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )}

      </Flex>
    </Flex>
  );
};

export default Nav;