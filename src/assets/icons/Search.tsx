import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    color:string
}

function Search({color}:Props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      
    >
      <Path
        d="M15.25 15.25L11.5 11.5M.75 7a6.25 6.25 0 1112.5 0A6.25 6.25 0 01.75 7z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Search
