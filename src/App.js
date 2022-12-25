import { Box, Button, useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import DrawerComponent from './components/DrawerComponent';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Nav from './components/Nav';
import LoginPage from './pages/auth-page/loginPage';


function App() {
const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
console.log(isLoggedIn,"1223")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
    {!isLoggedIn && (<Box>
      <LoginPage/>
    </Box>)}
    {isLoggedIn && (<Box>
      <Nav ref={btnRef} onOpen={onOpen} />
      <Intro />
      <AboutUs />
      <ContactUs />
      <Footer />
      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>)}
    </>
  );
}

export default App;