import { ChakraProvider } from '@chakra-ui/react';

const AppChakraProvider = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default AppChakraProvider;