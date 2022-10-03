import React from 'react'
import Categorycard from '../Components/Categorycard'
import Navbar from '../Components/Navbar'
import { Box, Text} from '@chakra-ui/react'


export async function getStaticProps(context) {
  const res = await fetch("https://api.publicapis.org/categories")
  const posts = await res.json()
  return {
    props: {
      posts: posts,
    },
  }
}

const Categoriesdata = ({posts}) => {
  console.log(posts)
  return (
    <>
    <Navbar />
    <Text
        pt={["1rem"]}
        pl={["1rem", "2rem", "3rem"]}
        fontFamily={"cursive"}
        fontSize={["3xl", "5xl", "7xl"]}
      >
        Categories
      </Text>
    {posts.categories.map((val,key)=>{
      return(
        <Box key={key}>
          <Categorycard val={val} />
        </Box>
      )
    })}
    </>
  )
}

export default Categoriesdata