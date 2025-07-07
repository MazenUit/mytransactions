import IncomingIcon from '@/assets/icons/IncomingIcon';
import OutgoingIcon from '@/assets/icons/OutgoingIcon';
import { TabButtonProps } from '@/interfaces/interfaces';
import { Pressable, Text, View } from 'react-native';

const renderIcon = (type: 'Incoming' | 'Outgoing', color: string) => {
  if (type === 'Incoming') return <IncomingIcon color={color} />;
  return <OutgoingIcon color={color} />;
};

export default function TabButton({ type, activeTab, onPress }: TabButtonProps) {
  const isActive = activeTab === type;
  const color = isActive ? '#FFFFFF' : '#4F46E5';
  const bg = isActive ? 'bg-[#4F46E5]' : '';

  return (
    <View className="flex-1 mx-1">
      <Pressable
        onPress={() => onPress(type)}
        className={`min-h-16 flex-row items-center justify-center rounded-full ${bg}`}
      >
        {renderIcon(type, color)}
        <Text className="ml-2 text-base capitalize font-semibold" style={{ color }}>{type}</Text>
      </Pressable>
    </View>
  );
}
