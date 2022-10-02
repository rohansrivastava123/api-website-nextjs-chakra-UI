import React from "react"
import Image from "next/image"
import { useColorMode } from "@chakra-ui/react"
import { Text, Box } from "@chakra-ui/react"
import Navbar from "./Navbar"
function Frontpage() {
  const { colorMode } = useColorMode()
  return (
    <>
    <Navbar />
      <div
        className="front"
        style={{
          fontSizes: ["sm", "lg", "xl"],
          color: colorMode === "light" ? "black" : "white",
        }}
      >
        <Text
          fontFamily={["cursive"]}
          mt={"4rem"}
          fontSize={["xl", "3xl", "4xl", "5xl"]}
          align="center"
        >
          Kite India Welcomes You !
        </Text>
        <Box display={'flex'} justifyContent='center'>
          <Image
            src="/kiteindia1.png"
            alt="not found"
            width={100}
            height={100}
          />
        </Box>
      </div>
    </>
  )
}

export default Frontpage
