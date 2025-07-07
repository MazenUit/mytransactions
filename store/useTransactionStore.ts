import { transactions as initialTransactions } from '@/data/transactions';
import { TransactionStore } from '@/interfaces/interfaces';
import { Share } from 'react-native';
import { create } from 'zustand';

export const useTransactionStore = create<TransactionStore>((set, get) => ({
  transactions: initialTransactions,

  setTransactions: (transactions) => {
    set({ transactions });
  },

  shareTransaction: async (refId: string) => {
    const matchedTransaction = get().transactions.find(
      (transaction) => transaction.refId === refId
    );

    if (!matchedTransaction) {
      console.warn(`Transaction with refId '${refId}' not found.`);
      return;
    }
    const shareableUrl = `https://yourapp.com/transction/${matchedTransaction.refId}`;
    const shareMessage = `Transfer Detail\n\nRef ID: ${matchedTransaction.refId}\nTransfer Name: ${matchedTransaction.transferName}\nRecipient: ${matchedTransaction.recipientName}\nDate: ${new Date(matchedTransaction.transferDate).toLocaleString()}\nAmount: RM${matchedTransaction.amount.toFixed(2)}\n\nView this transfer: ${shareableUrl}`;
    try {
      await Share.share({ message: shareMessage });
    } catch (error) {
      console.error('Error sharing transaction:', error);
    }
  },
}));
