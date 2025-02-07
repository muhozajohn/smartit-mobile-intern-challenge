import { Text, View } from "react-native";
import { BellDot } from "lucide-react-native";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <View>
      <View className="bg-blue-600 p-5 h-fit w-full flex-row justify-between items-center">
        <View className="py-6">
          <Text className="text-white text-sm">Hello</Text>
          <Text className="text-white text-2xl font-bold">
            Leslie Alexander
          </Text>
        </View>
        <Text className="text-2xl bg-blue-500 p-2 rounded-md">
          <BellDot size={24} color="#ffff" />
        </Text>
      </View>
      <SearchBar />
    </View>
  );
};

export default Header;
