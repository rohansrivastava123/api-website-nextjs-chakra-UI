import React from 'react'
import Navbar from '../Components/Navbar'
import {Box , Text} from '@chakra-ui/react'
import Datacard from '../Components/Datacard'
export async function getStaticProps()
{
  const res= await fetch('https://api.publicapis.org/entries')
  const posts=await res.json()
  return {
    props:{
      posts
    }
  }
} 

const Indexdata = ({posts}) => {
  return (
    <>
    <Navbar />
    <Text pt={['1rem']} pl={['1rem','2rem','3rem']} fontFamily={'cursive'} fontSize={['3xl','5xl','7xl']}>Index</Text>
    {posts.entries.map((data,key)=>{
      return(
       <Box key={key}>
          <Datacard data={data}/>
       </Box>) 
    })}
    </>
  )
}

export default Indexdata