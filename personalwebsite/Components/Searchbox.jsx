import React, { useState } from "react"
import { Box} from "@chakra-ui/react"
function Searchbox() {
  const [value, setValue] = useState("")
  return (
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
        >
          <button type="submit">Searchs</button>
        </Box>
      </Box>
    </form>
  )
}

export default Searchbox
