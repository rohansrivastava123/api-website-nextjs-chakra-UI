import React from "react"
import Image from "next/image"
import { useColorMode } from "@chakra-ui/react"
function Frontpage() {
  const { colorMode } = useColorMode()
  return (
    <>
      <div
        className="front"
        style={{ color: colorMode === "light" ? "black" : "white" }}
      >
        <h1>Kite India Welcomes You !</h1>
        <Image src="/kiteindia1.png" alt="not found" width={100} height={100} />
      </div>
    </>
  )
}

export default Frontpage
