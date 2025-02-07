import React, { useState, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { BookmarkIcon } from "lucide-react-native";
import CustomButtons from "./CustomButtons";
import { Redirect, router } from "expo-router";
const CARD_WIDTH = 288;
const CARD_MARGIN = 16;

const JobCard = ({ job, isActive }) => (
  <View
    className={`rounded-xl p-4 mr-4 shadow-lg w-72 ${
      isActive ? "bg-slate-200" : "bg-white"
    }`}
  >
    <View className="flex-row justify-between items-start mb-3">
      <View className="flex-row items-center gap-3">
        <View className="p-2 rounded-full bg-red-50 items-center justify-center">
          <Text className="text-red-600 font-bold text-lg">{job?.icon}</Text>
        </View>
        <View>
          <Text className="font-bold text-base">{job.company}</Text>
          <Text className="text-gray-500 text-sm">{job.location}</Text>
        </View>
      </View>
      <BookmarkIcon size={24} color="#666666" />
    </View>

    <Text className="font-bold text-lg mb-2">{job.position}</Text>
    <Text className="text-gray-500 mb-4">{job.type}</Text>

    <View className="flex-row justify-between items-center">
      <CustomButtons
        title={`Apply Now`}
        handlePress={() => router.push("/JobDescription")}
      />
      <Text className="font-bold text-base mt-1">
        {job.salary}
        <Text className=" text-sm !text-gray-500">/Month</Text>
      </Text>
    </View>
  </View>
);

const RecommeNdations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const jobData = [
    {
      company: "Pinterest, Inc.",
      location: "California, USA",
      position: "Motion Designer",
      type: "Senior • Fulltime • Remote",
      salary: "$7K",
      icon: <Icon name="pinterest" size={27} color="red" />,
    },
    {
      company: "Facebook, Inc.",
      location: "California, USA",
      position: "UI Designer",
      type: "Senior • Fulltime • Remote",
      salary: "$17K",
      icon: <Icon name="instagram" size={26} color="purple" />,
    },
    {
      company: "Instagram, Inc.",
      location: "California, USA",
      position: "Motion Designer",
      type: "Senior • Fulltime • Remote",
      salary: "$17K",
      icon: <Icon name="instagram" size={26} color="purple" />,
    },
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (CARD_WIDTH + CARD_MARGIN));
    setActiveIndex(index);
  };

  return (
    <View className="p-5 py-10">
      <Text className="text-xl font-bold mb-4">Recommendation</Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={CARD_WIDTH + CARD_MARGIN}
        decelerationRate="fast"
        snapToAlignment="center"
      >
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} isActive={index === activeIndex} />
        ))}
      </ScrollView>
    </View>
  );
};

export default RecommeNdations;
