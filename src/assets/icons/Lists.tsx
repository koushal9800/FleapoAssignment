import * as React from "react"
import Svg, { G, Mask, Path, Defs } from "react-native-svg"


interface Props{
  color:string
}

function Lists({color}: Props) {
  return (
    <Svg
      width={33}
      height={45}
      viewBox="0 0 33 45"
      fill="none"
      
    >
      <G filter="url(#filter0_d_43_121)">
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={4.83331}
          y={4.33331}
          width={24}
          height={24}
          fill="#000"
        >
          <Path fill="#fff" d="M4.83331 4.33331H28.83331V28.33331H4.83331z" />
          <Path d="M26.167 21V9A2.667 2.667 0 0023.5 6.333h-14A2.667 2.667 0 006.833 9v14A2.667 2.667 0 009.5 25.667h13" />
        </Mask>
        <Path
          d="M26.167 21V9A2.667 2.667 0 0023.5 6.333h-14A2.667 2.667 0 006.833 9v14A2.667 2.667 0 009.5 25.667h13"
          fill={color}
        />
       
      </G>
      <Path
        d="M12.167 11.667h8.666M12.167 17H15.5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.576 20.728c1.253-1.19 2.92-.84 3.92.46 1-1.3 2.646-1.637 3.92-.458 1.273 1.174 1.43 3.176.444 4.581L23.496 30l-4.364-4.689c-.983-1.405-.807-3.394.444-4.583z"
        fill={color}
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Lists
