import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
import NextLink from "next/link"
function Categorycard({ val }) {
  const { colorMode } = useColorMode()

  return (
    <>
      <NextLink href={`/Category/${val}`}>
        <a>
          <Box
            mb={"1rem"}
            className="categorybox"
            bgColor={colorMode === "dark" ? "whiteAlpha.200" : "	#F0F0F0"}
          >
            <Text
              fontSize={["lg", "xl", "2xl"]}
              fontWeight={600}
              fontFamily={"fangsong"}
            >
              {val}
            </Text>
          </Box>
        </a>
      </NextLink>
    </>
  )
}

export default Categorycard
