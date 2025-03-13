import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    color:string
}

function Arrow({color}:Props) {
  return (
    <Svg
      width={5}
      height={9}
      viewBox="0 0 5 9"
      fill="none"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.2.74A.75.75 0 011.26.7l3.5 3.25a.75.75 0 010 1.1L1.26 8.3A.75.75 0 11.24 7.2l2.908-2.7L.24 1.8A.75.75 0 01.2.74z"
        fill={color}
      />
    </Svg>
  )
}

export default Arrow
