import React from "react";
import { TextInput, View } from "react-native";
import { Search } from "lucide-react-native";

const SearchBar = () => {
  return (
    <View className="bg-blue-600 relative px-5 pb-5 py-4">
      <View className="bg-white w-full h-16 px-4 absolute left-5 right-5 -bottom-16 -translate-y-1/2 shadow-indigo-950 rounded-2xl items-center flex-row focus:border-secondary">
        <Search size={24} color="#ccc" />
        <TextInput
          className="flex-1 h-full text-base font-semibold"
          placeholder="Search job, company, etc.."
          placeholderTextColor="#ccc"
        />
      </View>
    </View>
  );
};

export default SearchBar;
