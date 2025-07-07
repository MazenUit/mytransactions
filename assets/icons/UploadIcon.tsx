import { UploadIconProps } from '@/interfaces/interfaces';
import { Path, Svg } from 'react-native-svg';

export default function UploadIcon({ size = 20, color = '#FFFFFF', style }: UploadIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
      <Path d="M16 6l-4-4-4 4" />
      <Path d="M12 2v14" />
    </Svg>
  );
}
