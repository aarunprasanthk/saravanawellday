import {
  Box,
  Button,
  Flex,
  Img,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import intro from '../assets/home/img3.jpg'

const Intro = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Box mr={isLargerThanLG ? '6' : '0'} w={isLargerThanLG ? '60%' : 'full'}>
        <Text
          fontSize={isLargerThanLG ? '5xl' : '4xl'}
          fontWeight="bold"
          mb="4"
        >
          {' '}
          Saravana Cloths
        </Text>

        <Text mb="6" fontSize={isLargerThanLG ? 'lg' : 'base'} opacity={0.7}>
        Outlet-stock clothing is made up of the following stocks: overproduction, discontinued series and store leftover collections. Our company only buys original, new, undamaged goods with tags from foreign manufacturers and traders.
        e serve both retailers and wholesalers, the wholesale minimum purchase quantity is 30 pcs. Thanks to our personal, international, long-term established business relationships, they can get our products at extremely favorable prices.
        We hope to welcome you among our customers soon!
        </Text>

        <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThanLG ? 'lg' : 'md'}
          mb={isLargerThanLG ? '0' : '10'}
          onClick={(e) => {
            e.preventDefault();
            window.location.href='#';
            }}
        >
          Read More
        </Button>
      </Box>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        alignItems="center"
        justifyContent="center"
      >
        <Img src={intro} alt="Chakra UI" />
      </Flex>
    </Flex>
  );
};

export default Intro;