import UploadIcon from '@/assets/icons/UploadIcon';
import { useTransactionStore } from '@/stores/useTransactionStore';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import { useLayoutEffect, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function TransactionDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  const transactions = useTransactionStore(state => state.transactions);
  const shareTransaction = useTransactionStore(state => state.shareTransaction);

  const transaction = useMemo(() => (
    transactions.find(transaction => transaction.refId === id)
  ), [transactions, id]);

  useLayoutEffect(() => {
    if (transaction) {
      navigation.setOptions({
        title: `${transaction.recipientName} - ${new Date(transaction.transferDate).toLocaleDateString()}`,
      });
    }
  }, [transaction, navigation]);

  if (!transaction) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-500">Transaction not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 px-5 pt-10">
      <View className="bg-white rounded-2xl px-4 py-5 shadow-md border border-gray-100" style={{ elevation: 3 }}>
        <View className="bg-indigo-50 px-2 py-1 rounded-full self-start mb-2">
          <Text className="text-indigo-600 text-xs font-semibold">{transaction.transferName}</Text>
        </View>
        <Text className="text-sm text-gray-600 mb-1">Ref ID: {transaction.refId}</Text>
        <Text className="text-sm text-gray-600 mb-1">Recipient: {transaction.recipientName}</Text>
        <Text className="text-sm text-gray-600 mb-1">Date: {new Date(transaction.transferDate).toLocaleString()}</Text>
        <Text className={`text-lg font-bold ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-500'}`}>
          {transaction.amount >= 0
            ? `+ RM${transaction.amount.toFixed(2)}`
            : `- RM${Math.abs(transaction.amount).toFixed(2)}`}
        </Text>
      </View>

      <Pressable
        onPress={() => shareTransaction(transaction.refId)}
        className="mt-8 flex-row items-center justify-center bg-[#4F46E5] rounded-full px-4 py-3"
      >
        <UploadIcon />
        <Text className="text-white ml-2 font-semibold">Share Transfer</Text>
      </Pressable>
    </View>
  );
}
