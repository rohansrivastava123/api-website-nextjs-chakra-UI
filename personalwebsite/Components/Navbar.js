import {
  useColorMode,
  IconButton,
  Switch,
  Flex,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import NextLink from "next/Link"
import { Text } from "@chakra-ui/react"
function Navbar(children) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  const [display, changedisplay] = useState("none")
  const [crossbtn, togglecross] = useState(false)
  return (
    <Flex>
      {/* flex  when screen size is bigger */}
      <Flex pos="fixed" top="1rem" right="3rem" align="center">
        <Flex display={["none", "none", "flex", "flex"]}>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={3} w="100%">
              <Text fontSize={["lg", "xl", "2xl"]}>Home</Text>
            </Button>
          </NextLink>
          <NextLink href="/Indexdata" passHref>
            <Button as="a" variant="ghost" aria-label="Index" my={3} w="100%">
              <Text fontSize={["lg", "xl", "2xl"]}>Index</Text>
            </Button>
          </NextLink>
          <NextLink href="/Categoriesdata" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Categories"
              my={3}
              w="100%"
            >
              <Text fontSize={["lg", "xl", "2xl"]}>Categories</Text>
            </Button>
          </NextLink>
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          mr="2"
          size={"md"}
          display={
            crossbtn === true ? "none" : ["flex", "flex", "none", "none"]
          }
          onClick={() => {
            changedisplay("flex")
            togglecross(true)
          }}
        />
        <Switch
          left="1rem"
          as="a"
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          display={crossbtn === true ? "none" : "flex"}
        />
      </Flex>

      {/* flex used when the screen is smaller and we will click the HamburgerIcon */}
      <Flex
        w={"100vw"}
        zIndex="20"
        h={"100vh"}
        pos="fixed"
        top={"0"}
        left="0"
        overflowY={"auto"}
        flexDir="column"
        display={display}
      >
        <Flex justify={"flex-end"}>
          {/* button to close small navbar */}
          <IconButton
            mt={2}
            mr={2}
            icon={<CloseIcon />}
            aria-label="Close menu"
            size="md"
            onClick={() => {
              changedisplay("none")
              togglecross(false)
            }}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>
          <NextLink href="/index" passHref>
            <Button as="a" variant="ghost" aria-label="Index" my={5} w="100%">
              Index
            </Button>
          </NextLink>
          <NextLink href="/categories" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Categories"
              my={5}
              w="100%"
            >
              Categories
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
