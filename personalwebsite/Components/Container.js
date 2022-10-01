import react from 'react'
import{
    useColorMode,
    Button,
    Flex,
    Box,
    useControllableProp
} from '@chakra-ui/react'
import customTheme from '../styles/theme'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import {Heading } from '@chakra-ui/react'
import Navbar from './Navbar'
import {theme as chakraTheme} from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
function Container(children)
{
    const {colorMode } = useColorMode()
     return(
        
        <>
            <Navbar  />
        </>
     )
}
export default Container