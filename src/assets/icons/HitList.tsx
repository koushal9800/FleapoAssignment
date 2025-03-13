import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"

interface Props{
  color:string
}

function HitList({color}:Props) {
  return (
    <Svg
      width={21}
      height={26}
      viewBox="0 0 21 26"
      fill="none"
      
    >
      <G filter="url(#filter0_d_43_127)">
        <Path
          d="M4.75 5a2.667 2.667 0 012.667-2.667h8.666A2.667 2.667 0 0118.75 5v16.667l-7-6-7 6V5z"
          fill={color}
        />
        <Path
          d="M18.1 22.426a1 1 0 001.65-.76V5a3.667 3.667 0 00-3.667-3.667H7.417A3.667 3.667 0 003.75 5v16.667a1 1 0 001.65.759l6.35-5.442 6.35 5.442z"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default HitList
