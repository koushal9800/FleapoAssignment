import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"

interface Props{
  color:string
}

function People({color}:Props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
     
    >
      <G filter="url(#filter0_d_43_119)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.25 14.333a4 4 0 100-8 4 4 0 000 8z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.25 23.667c5.891 0 10.667-4.776 10.667-10.667S21.14 2.333 15.25 2.333 4.583 7.11 4.583 13 9.36 23.667 15.25 23.667zm6.698-5.167a9.308 9.308 0 00-6.698-2.833A9.308 9.308 0 008.552 18.5a8.667 8.667 0 1113.396 0z"
          fill={color}
        />
        <Path
          d="M15.25 5.333a5 5 0 012.088 9.545A10.303 10.303 0 0121.792 17 7.667 7.667 0 0015.25 5.334zm0 0a7.667 7.667 0 00-6.542 11.668 10.303 10.303 0 014.454-2.123 5 5 0 012.088-9.545zm0 19.334c6.443 0 11.667-5.224 11.667-11.667S21.693 1.333 15.25 1.333 3.583 6.557 3.583 13 8.807 24.667 15.25 24.667z"
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

export default People
