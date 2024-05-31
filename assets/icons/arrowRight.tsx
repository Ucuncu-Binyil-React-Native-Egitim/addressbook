import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    fill='none'
    {...props}
  >
    <Path
      fill='#000'
      fillRule='evenodd'
      d='M5.504 4.004a.583.583 0 0 0 0 .825L9.175 8.5l-3.67 3.67a.583.583 0 1 0 .824.826l4.083-4.084a.583.583 0 0 0 0-.824L6.33 4.004a.583.583 0 0 0-.825 0Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default SvgComponent;
