import type { ViewStyle } from 'react-native';


export interface Transaction {
  refId: string;
  transferDate: string;
  recipientName: string;
  transferName: string;
  amount: number;
}

export interface TransactionStore {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  shareTransaction: (refId: string) => Promise<void>;
}


export interface UploadIconProps {
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export interface TabButtonProps {
  type: 'Incoming' | 'Outgoing';
  activeTab: 'Incoming' | 'Outgoing';
  onPress: (type: 'Incoming' | 'Outgoing') => void;
}

export interface TransactionSummary {
  incoming: number;
  outgoing: number;
}

export interface TabNavProps {
  onSummaryChange?: (summary: TransactionSummary) => void;
}

export interface TransactionItemProps {
  transaction: Transaction;
  onPress: () => void;
}
