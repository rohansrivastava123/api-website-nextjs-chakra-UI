import React from 'react'
import{Box ,Text}  from '@chakra-ui/react'
import {useColorMode} from '@chakra-ui/react'
import NextLink from "next/Link"
function Datacard({data}) {
    const {colorMode} = useColorMode()
    
  return (
    <>
        <NextLink href={`/Index/${data.API}`} >
        <a>
        <Box className='indexbox'  bgColor={colorMode==='dark'?'whiteAlpha.200':'	#F0F0F0' }>
            <Text fontSize={['lg','xl','2xl']} fontWeight={600} fontFamily={'fangsong'}
            >{data.API} ({data.Category})</Text>
            <Text fontSize={['xsm','sm','md']}>{data.Description}</Text>
            <Text fontSize={['xx-small','xs','sm']}><i>"{data.Link}"</i></Text>
        </Box>
        </a>
        
        </NextLink>
    </>
  )
}

export default Datacard