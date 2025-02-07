import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButtons from "../components/CustomButtons";
import { images, icons } from "../constants";
import { MessageCircle } from "lucide-react-native";

const TabIndicator = ({ title, isActive, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`pb-2 border-b-2 ${
      isActive ? "border-black" : "border-transparent"
    }`}
  >
    <Text className={`text-sm ${isActive ? "text-black" : "text-gray-500"}`}>
      {title}
    </Text>
  </TouchableOpacity>
);

const JobDescription = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const job = {
    position: "Product Designer",
    location: "California, USA",
    salary: "$80k - $100k",
    about:
      "Google is a global technology leader, focused on improving the ways people connect with information.",
    requirements:
      "5+ years of experience in product design, Bachelor's degree in Design or related field.",
  };

  const responsibilities = [
    "Deliver a well-crafted design that follows standard for consistency in quality and experience.",
    "Design creative solutions that deliver not only value customer but also solve business objectives.",
    "You are also required to contribute to the design and critics, conceptual discussion, and also maintaining consistency of design system.",
  ];

  const tabs = ["Description", "Company", "Aplicant", "Salary"];
  const skills = ["Lead", "UX Design", "Problem Solving", "Critical"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <View>
            <JobResponsibilities />
            <SkillsSection />
          </View>
        );
      case "Company":
        return (
          <View className="mt-4">
            <Text className="text-xl font-bold mb-3">About Google</Text>
            <Text className="text-gray-500">{job.about}</Text>
          </View>
        );
      case "Aplicant":
        return (
          <View className="mt-4">
            <Text className="text-xl font-bold mb-3">Requirements</Text>
            <Text className="text-gray-500">{job.requirements}</Text>
          </View>
        );
      case "Salary":
        return (
          <View className="mt-4">
            <Text className="text-xl font-bold mb-3">Compensation</Text>
            <Text className="text-gray-500">
              Salary range: {job.salary} per year
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  const JobResponsibilities = () => (
    <View className="mt-10">
      <Text className="text-2xl font-bold mb-4">Job Responsibilities</Text>
      {responsibilities.map((item, index) => (
        <View key={index} className="flex-row mb-3">
          <Text className="mr-2">•</Text>
          <Text className="flex-1 text-gray-500">{item}</Text>
        </View>
      ))}
    </View>
  );

  const SkillsSection = () => (
    <View className="mt-6">
      <Text className="text-2xl font-bold mb-4">Skills Needed</Text>
      <View className="flex-row flex-wrap gap-2">
        {skills.map((skill, index) => (
          <View key={index} className="bg-gray-100 px-3 py-2 rounded-lg">
            <Text className="text-gray-800">• {skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={images.meeting}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.logoContainer}>
            <Image
              source={icons.google}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="p-4 mt-10">
          <View className="flex gap-4 justify-center items-center ">
            <Text className="text-2xl text-center font-bold">
              {job.position}
            </Text>
            <Text className="text-gray-500 mt-1">{job.location}</Text>
          </View>

          <View className="flex-row justify-between mt-6">
            {tabs.map((tab) => (
              <TabIndicator
                key={tab}
                title={tab}
                isActive={activeTab === tab}
                onPress={() => setActiveTab(tab)}
              />
            ))}
          </View>

          {renderTabContent()}
        </View>
      </ScrollView>

      <View className="p-4 border-t border-gray-200 flex-row gap-3">
        <CustomButtons
          title="Apply Now"
          containerStyles="flex-1"
          handlePress={() => {}}
        />
        <TouchableOpacity
          className="bg-blue-600 rounded-xl p-3 justify-center items-center"
          onPress={() => {}}
        >
          <MessageCircle color="white" size={26} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default JobDescription;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 320, 
  },
  image: {
    width: "100%",
    height: "100%",
  },

  logoContainer: {
    position: "absolute",
    bottom: -28, 
    left: "50%",
    transform: [{ translateX: -32 }], 
    width: 70, 
    height: 70, 
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 24,
  },
});
