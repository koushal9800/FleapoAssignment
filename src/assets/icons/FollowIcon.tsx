import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props{
    color:string
}

function FollowIcon({color}:Props) {
  return (
    <Svg
      width={12}
      height={10}
      viewBox="0 0 12 10"
      fill="none"
      
    >
      <Path
        clipRule="evenodd"
        d="M5.997 1.822C5.03.74 3.419.45 2.208 1.44c-1.21.99-1.381 2.647-.43 3.82l4.219 3.907 4.219-3.908c.95-1.172.8-2.839-.43-3.82-1.232-.98-2.823-.699-3.79.383z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FollowIcon
