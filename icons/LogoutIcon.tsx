import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const LogoutIcon = (props: SvgProps) => (
  <Svg width={29} height={24} fill="none" {...props}>
    <Path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M22 11.5H10M22 16l4-4-4-4"
    />
  </Svg>
);
export default LogoutIcon;
