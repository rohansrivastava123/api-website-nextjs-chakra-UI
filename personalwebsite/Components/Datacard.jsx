import React from 'react'
import{Box ,Text} from '@chakra-ui/react'
import {useColorMode} from '@chakra-ui/react'
function Datacard({data}) {
    const {colorMode} = useColorMode()
    
  return (
    <>
        <Box boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.25)' p={'1rem'} mt={'1rem'} ml={'3rem'} mr={'3rem'} bgColor={colorMode==='dark'?'whiteAlpha.200':'	#F0F0F0' }>
            <Text fontSize={['md','lg','xl']} fontFamily={'fangsong'}
            >{data.API}</Text>
        </Box>
    </>
  )
}

export default Datacard