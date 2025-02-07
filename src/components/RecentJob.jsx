import React from "react";
import { View, Text, Image } from "react-native";
import { BookmarkIcon } from "lucide-react-native";
import { icons } from "../constants";

const RecentJobCard = ({ job }) => (
  <View className="bg-white rounded-lg p-4 mb-4 shadow">
  
    <View className="flex gap-8">
      <View className="flex-row justify-between items-start mb-3">
        <View className="flex-row gap-6 items-center space-x-3">
          <View className="w-16 h-16 !rounded-full bg-red-100 flex items-center justify-center">
            <Image
              source={job.companyLogo}
              className="w-24 h-24 rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text className="text-xl font-bold">{job.position}</Text>
            <Text className="text-gray-500 text-sm">{job.type}</Text>
          </View>
        </View>

        <BookmarkIcon size={24} color="#9CA3AF" />
      </View>

      <View className="flex-row justify-between items-center pl-16">
      <Text className="font-bold text-xl mt-1">
        {job.salary}
        <Text className=" text-base !text-gray-500">/Month</Text>
      </Text>
        <Text className="text-gray-500 text-base">{job.timeAgo}</Text>
      </View>
    </View>
  </View>
);

const RecentJob = () => {
  const recentJobs = [
    {
      position: "Product Designer",
      type: "Senior • Fulltime • Remote",
      salary: "5K",
      timeAgo: "12 Minutes Ago",
      companyLogo: icons.google,
    },
  ];

  return (
    <View className="mt-6 px-5">
      <Text className="text-2xl font-bold mb-4">Recent Job List</Text>
      {recentJobs.map((job, index) => (
        <RecentJobCard key={`recent-job-${index}`} job={job} />
      ))}
    </View>
  );
};

export default RecentJob;
