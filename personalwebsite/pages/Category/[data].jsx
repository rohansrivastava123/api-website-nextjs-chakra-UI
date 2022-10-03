import React from 'react'
import {useRouter} from 'next/router'
import Navbar from '../../Components/Navbar';
import {Box,Text, useColorMode} from '@chakra-ui/react'


function Categorydata({posts}) {
  const router =useRouter()
  const name =router.query.data;
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
      {posts.entries.filter((val)=>{
        if(val.Category === `${name}`)
        {      
          return val
        }
      }).map((post)=>{
        console.log(post)
        return(
          <Box className='specificcategorybox'  bgColor={colorMode==='dark'?'whiteAlpha.200':'	#F0F0F0' }>
            <Text fontSize={['lg','xl','2xl']} fontWeight={600} fontFamily={'fangsong'}
            >{post.API}</Text>
            <Text fontSize={['xsm','sm','md']}>{post.Description}</Text>
            <Text fontSize={['xx-small','xs','sm']}><i>"{post.Link}"</i></Text>
        </Box>
        )
      })}
    </>
  )
}

export default Categorydata




export async function getStaticProps(context) {
  const res = await fetch("https://api.publicapis.org/entries")
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}



export async function getStaticPaths() {
  const res = await fetch("https://api.publicapis.org/categories")
  const posts = await res.json()
  const paths=posts.categories.map((post)=>{
    return{params:{data:post.toString()}}
  })
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}
