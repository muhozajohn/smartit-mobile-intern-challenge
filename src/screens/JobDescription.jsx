import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => (
  <View className="p-4 items-center">
    <Image
      source={{ uri: "https://www.google.com/favicon.ico" }}
      className="w-16 h-16 rounded-full"
    />
    <Text className="text-2xl font-bold mt-2">Product Designer</Text>
    <Text className="text-gray-500">California, USA</Text>
  </View>
);

const TabBar = () => {
  const tabs = ["Description", "Company", "Aplicant", "Salary"];
  return (
    <View className="flex-row border-b border-gray-200">
      {tabs.map((tab, index) => (
        <View
          key={index}
          className={`flex-1 p-4 ${
            index === 0 ? "border-b-2 border-black" : ""
          }`}
        >
          <Text
            className={`text-center ${
              index === 0 ? "font-bold" : "text-gray-500"
            }`}
          >
            {tab}
          </Text>
        </View>
      ))}
    </View>
  );
};

const JobResponsibilities = () => (
  <View className="p-4">
    <Text className="text-2xl font-bold mb-4">Job Responsibilities</Text>
    {[
      "Deliver a well-crafted design that follows standard for consistency in quality and experience.",
      "Design creative solutions that deliver not only value customer but also solve business objectives.",
      "You are also required to contribute to the design and critics, conceptual discussion, and also maintaining consistency of design system.",
    ].map((responsibility, index) => (
      <View key={index} className="flex-row mb-3">
        <Text className="text-gray-500">• </Text>
        <Text className="flex-1 text-gray-500">{responsibility}</Text>
      </View>
    ))}
  </View>
);

const SkillsNeeded = () => (
  <View className="p-4">
    <Text className="text-2xl font-bold mb-4">Skills Needed</Text>
    <View className="flex-row flex-wrap">
      {["Lead", "UX Design", "Problem Solving", "Critical"].map(
        (skill, index) => (
          <View key={index} className="flex-row items-center mr-4 mb-2">
            <Text className="text-gray-500">• </Text>
            <Text className="text-gray-500">{skill}</Text>
          </View>
        )
      )}
    </View>
  </View>
);
const JobDescriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <Header />
        <TabBar />
        <JobResponsibilities />
        <SkillsNeeded />
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDescriptions;
