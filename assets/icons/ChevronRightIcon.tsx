import Svg, { Path } from 'react-native-svg';

export default function ChevronRightIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" stroke="#9CA3AF" fill="none" strokeWidth={2}>
      <Path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}