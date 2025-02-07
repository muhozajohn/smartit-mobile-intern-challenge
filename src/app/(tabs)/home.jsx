import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import RecommeNdations from "../../components/Recommendations";
import RecentJob from "../../components/RecentJob";

const Home = () => {
  return (
    <SafeAreaView className="!h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Header />
        <RecommeNdations />
        <RecentJob />
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Home;
