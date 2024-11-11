import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const DeleteIcon = (props: SvgProps) => (
  <Svg width={37} height={37} fill="none" {...props}>
    <Circle
      cx={18.5}
      cy={18.5}
      r={12}
      fill="#fff"
      stroke="#E8E8E8"
      transform="rotate(-45 18.5 18.5)"
    />
    <Path
      fill="#BDBDBD"
      fillRule="evenodd"
      d="m14.257 13.55-.707.707 4.243 4.243-4.243 4.243.707.707 4.243-4.243 4.243 4.243.707-.707-4.243-4.243 4.243-4.243-.707-.707-4.243 4.243-4.243-4.243Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default DeleteIcon;
