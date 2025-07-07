import Svg, { Path } from 'react-native-svg';

export default function OutgoingIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} stroke={color} viewBox="0 0 24 24" fill="none" strokeWidth={2}>
      <Path d="M12 20V4m0 0l6 6m-6-6L6 10" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
