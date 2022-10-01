import { ChakraProvider, ColorModeProvider,useColorMode } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider resetCSS theme={customTheme}>
    <ColorModeProvider
      options={{
        initialColorMode:"dark",
        useSystemColorMode:true
      }}
      >
      <Component {...pageProps} />
    </ColorModeProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
