import Svg, { Path } from 'react-native-svg';

export default function IncomingIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} stroke={color} viewBox="0 0 24 24" fill="none" strokeWidth={2}>
      <Path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
