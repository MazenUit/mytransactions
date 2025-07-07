import { useTransactionStore } from '@/stores/useTransactionStore';
import { useMemo } from 'react';

export function useTransactionSummary() {
  const transactions = useTransactionStore(state => state.transactions);

  return useMemo(() => {
    const incoming = transactions
      .filter(transaction => transaction.amount >= 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const outgoing = transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    return { incoming, outgoing };
  }, [transactions]);
}
