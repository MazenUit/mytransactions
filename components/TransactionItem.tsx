import ChevronRightIcon from '@/assets/icons/ChevronRightIcon';
import { TransactionItemProps } from '@/interfaces/interfaces';
import { Pressable, Text, View } from 'react-native';

export default function TransactionItem({ transaction, onPress }: TransactionItemProps) {
  const { refId, transferName, recipientName, transferDate, amount } = transaction;

  return (
    <View className="bg-white rounded-2xl px-4 py-3 mb-3 shadow-sm">
      <Pressable className="flex flex-col" onPress={onPress}>
        <View className="flex-row justify-between items-start">
          <View className="flex-1">
            <View className="bg-indigo-50 px-2 py-1 rounded-full mb-1 self-start">
              <Text className="text-indigo-600 text-xs font-semibold">{transferName}</Text>
            </View>
            <Text className="text-xs text-gray-400 mt-3">Ref ID: {refId}</Text>
            <Text className="text-xs text-gray-500 mt-1">{recipientName}</Text>
            <Text className="text-xs text-gray-400 mt-1">{new Date(transferDate).toLocaleString()}</Text>
          </View>
          <View className="items-end">
            <Text className={`text-sm font-semibold ${amount >= 0 ? 'text-green-600' : 'text-red-500'}`}>
              {amount >= 0 ? `+ RM${amount.toFixed(2)}` : `- RM${Math.abs(amount).toFixed(2)}`}
            </Text>
          </View>
        </View>
        <View className="items-end pt-3">
          <ChevronRightIcon />
        </View>
      </Pressable>
    </View>
  );
}
