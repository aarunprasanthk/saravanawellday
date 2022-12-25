import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import loginImage from '../../assets/products/image10.jpg'
import { useDispatch } from 'react-redux';
import {authActions} from '../../store/auth';

export default function LoginPage() {
  const dispatch = useDispatch()
  const handleAuthAction =(e)=>{
    e.preventDefault()
    dispatch(authActions.login())
  }
  return ( 
    <form onSubmit={handleAuthAction}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Welcome to Saravanana Cloths</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>``
            <Input type="email" required/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" required/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button type="submit" colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={loginImage}
        />
      </Flex>
    </Stack></form>
    
  );
}
