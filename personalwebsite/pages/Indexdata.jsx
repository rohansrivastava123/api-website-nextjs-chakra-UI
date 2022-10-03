import React from "react"
import Navbar from "../Components/Navbar"
import { Box, Text } from "@chakra-ui/react"
import Datacard from "../Components/Datacard"
import { useState } from "react"


export async function getStaticProps(context) {
  const res = await fetch("https://api.publicapis.org/entries")
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

const Indexdata = ({ posts }) => {
  const [value, setValue] = useState("")
  console.log(posts.entries)
  return (
    <>
      <Navbar />
      <Text
        pt={["1rem"]}
        pl={["1rem", "2rem", "3rem"]}
        fontFamily={"cursive"}
        fontSize={["3xl", "5xl", "7xl"]}
      >
        Index
      </Text>
      <Box display="flex" justifyContent="right" mr={"3rem"}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <Box className="searchbox" display={"flex"} alignItems="center">
            <input
              type={"text"}
              placeholder="Search it Here"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
              }}
            />
            <Box
              fontFamily={"cursive"}
              color={"whiteAlpha.900"}
              ml={1}
              p={0.8}
              pl={1}
              pr={1}
              bgColor={"#007FFF"}
              borderRadius={5}
              border={"2px solid black"}
            >
              <button type="submit">Search</button>
            </Box>
          </Box>
        </form>
      </Box>
      {posts.entries
        .filter((val) => {
          if(value=="")
            return val
          else if(val.API.toLowerCase().includes(value.toLowerCase()) || val.Category.toLowerCase().includes(value.toLowerCase()))
            return val
        })
        .map((data, key) => {
          return (
            <Box key={key}>
              <Datacard  data={data} />
            </Box>
          )
        })}
    </>
  )
}

export default Indexdata
