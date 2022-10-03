import React from 'react'
import {useRouter} from 'next/router'
import Navbar from '../../Components/Navbar';
import {Box,Text, useColorMode} from '@chakra-ui/react'



function Specificdata({posts}) {
    const router =useRouter()
    const name =router.query.Specificdata;
    const val= posts.entries.find(item=>item.API===`${name}`)
    const {colorMode} =useColorMode()
  return (
    <>
    <Navbar />
    <Text
        pt={["1rem"]}
        pl={["1rem", "2rem", "3rem"]}
        fontFamily={"cursive"}
        fontSize={["2xl", "3xl", "5xl"]}
      >
        {`${name}`}
      </Text>
      <Box className='specificcategorybox'  bgColor={colorMode==='dark'?'whiteAlpha.200':'	#F0F0F0' }>
          <Box display={'flex'} alignItems={'center'}>
            <Text fontSize={['lg','xl','2xl']} fontWeight={600} fontFamily={'fangsong'}>Api: -</Text>
            <Text ml={'1rem'}>{val.API}</Text>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <Text fontSize={['lg','xl','2xl']} fontWeight={600} fontFamily={'fangsong'}>Description: -</Text>
            <Text ml={'1rem'}>{val.Description}</Text>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <Text fontSize={['lg','xl','2xl']} fontWeight={600} fontFamily={'fangsong'}>Auth: -</Text>
            <Text ml={'1rem'}>{`${val.Auth}`}</Text>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <Text fontSize={['lg','xl','2xl']} fontWeight={600} fontFamily={'fangsong'}>HTTPS: -</Text>
            <Text ml={'1rem'}>{`${val.HTTPS}`}</Text>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <Text fontSize={['lg','xl','2xl']} fontWeight={600} fontFamily={'fangsong'}>Cors: -</Text>
            <Text ml={'1rem'}>{val.Cors}</Text>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <Text fontSize={['lg','xl','2xl']} fontWeight={600} fontFamily={'fangsong'}>Link: -</Text>
            <Text ml={'1rem'}>{val.Link}</Text>
          </Box>
        </Box>
      
    </>
  )
}

export default Specificdata




export async function getStaticPaths() {
  const res = await fetch("https://api.publicapis.org/entries")
  const posts = await res.json()
  const paths=posts.entries.map((post)=>{
    return{params:{Specificdata:post.API.toString()}}
  })
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}



export async function getStaticProps() {
  const res = await fetch("https://api.publicapis.org/entries")
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}