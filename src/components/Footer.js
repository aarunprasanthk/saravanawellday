import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="20vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
    >
      <Text mb="3">
        Provided by{' '}
        <Link href="https://appseed.us" isExternal color="blue.500">
        SRI SARAVANA CLOTH STORES
        </Link>
      </Text>
      <Text opacity="0.5">Door No: 54, PPS Buildings</Text>
      <Text opacity="0.5">Thillai Nagar,Kottai</Text>
      <Text opacity="0.5"><b>ERODE</b> - 638001</Text>
    </Flex>
  );
};

export default Footer;