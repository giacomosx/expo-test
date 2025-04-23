import { Text, View } from "react-native";
import '../../global.css'

export default function Index() {
  return (
    <View className="flex-1 bg-[#fafafa] ps-4">
        <View id={'my-events'}>
            <Text className={'text-lg font-medium mb-3.5'}>My Groups</Text>
            <View className={'flex gap-4 overflow-x-scroll mb-4'}>

            </View>
        </View>
    </View>
  );
}
