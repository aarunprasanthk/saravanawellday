import {
  Flex, useMediaQuery
} from '@chakra-ui/react';
import img3 from '../assets/products/image11.jpg';
import img4 from '../assets/products/image12.jpg';
import img1 from '../assets/products/image9.jpg';
import CardList from './CardList';

const json = [{
  isNew: true,
  imageURL:
    img1,
  name: 'Modern Shirts',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}, {
  isNew: true,
  imageURL: img1,
  name: 'White Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
},
{
  isNew: true,
  imageURL:
    img3,
  name: 'T-Shirts',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
},
{
  isNew: true,
  imageURL:
    img4,
  name: 'Dhoti',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}]


function AboutUs() {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  return (
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThanMD ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThanMD ? 'row' : 'column'}
      marginBottom="5px"
    >{json?.map((data) =>
      <div key={data.name}>
        <CardList data={data} />
      </div>
    )}</Flex>
  )
}

export default AboutUs;