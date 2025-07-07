import TabButton from '@/components/TabButton';
import TransactionItem from '@/components/TransactionItem';
import { useTransactionSummary } from '@/hooks/useTransactionSummary';
import { TabNavProps } from '@/interfaces/interfaces';
import { useTransactionStore } from '@/stores/useTransactionStore';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

export default function TabNav({ onSummaryChange }: TabNavProps) {
  const [active, setActive] = useState<'Incoming' | 'Outgoing'>('Incoming');
  const [refreshing, setRefreshing] = useState(false);
  const transactions = useTransactionStore().transactions;
  const router = useRouter();
  const summary = useTransactionSummary();

  const filteredTransactions = transactions.filter((transaction) =>
    active === 'Incoming' ? transaction.amount >= 0 : transaction.amount < 0
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  useEffect(() => {
    if (onSummaryChange) onSummaryChange(summary);
  }, [summary, onSummaryChange]);

  return (
    <View className="w-full">
      <View className="bg-white rounded-full overflow-hidden mb-5 h-16 flex-row items-center">
        <TabButton type="Incoming" activeTab={active} onPress={() => setActive('Incoming')} />
        <TabButton type="Outgoing" activeTab={active} onPress={() => setActive('Outgoing')} />
      </View>

      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.refId}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TransactionItem transaction={item} onPress={() => router.push(`/transction/${item.refId}`)} />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
