import TabNav from "@/components/TabNav";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [summary, setSummary] = useState({ incoming: 0, outgoing: 0 });

  return (
    <View className="flex-1 px-5 pt-20">
      <View className="bg-[#4F46E5] rounded-2xl p-5 mb-6 shadow-md">
        <Text className="text-white text-base font-semibold mb-2">Transaction Summary</Text>
        <View className="flex-row justify-between">
          <View>
            <Text className="text-white text-xs">Incoming</Text>
            <Text className="text-white font-medium">+ RM {summary.incoming.toFixed(2)}</Text>
          </View>
          <View className="items-end">
            <Text className="text-white text-xs">Outgoing</Text>
            <Text className="text-white font-medium">- RM {Math.abs(summary.outgoing).toFixed(2)}</Text>
          </View>
        </View>
      </View>

      <TabNav onSummaryChange={setSummary} />
    </View>
  );
}
