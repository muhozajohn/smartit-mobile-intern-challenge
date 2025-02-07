import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Mail, Phone } from "lucide-react-native"; 
import images from "../../constants/images";

const Profile = () => {
  return (
    <ScrollView className="bg-white flex-1 mt-16">
      <View className="items-center justify-center p-6">
        {/* Profile Image */}
        <Image
          source={images.profile}
          style={{ width: 120, height: 120, borderRadius: 60 }}
          resizeMode="cover"
        />

        <Text className="text-slate-400 text-sm mt-4">
        Full-Stack Engineer, mobile app developer,and UI/UX Designer
        </Text>

        <Text className="text-secondary font-pbold text-3xl mt-4">
          John Muhoza
        </Text>

        <View className="mt-3 w-full flex items-center">
          <View className="flex-row items-center space-x-2">
            <Mail size={18} color="#3B82F6" />
            <Text className="text-gray-600 ml-3 font-pmedium text-lg">
              muhozajohn4@gmail.com
            </Text>
          </View>

          <View className="flex-row items-center space-x-2  mt-2">
            <Phone size={18} color="#3B82F6" />
            <Text className="text-gray-600 ml-3 font-pmedium text-lg">
              +250 785 161 508
            </Text>
          </View>
        </View>

        <View className="mt-6 w-full">
          <Text className="text-secondary font-pbold text-2xl mb-2">Bio</Text>
          <Text className="text-gray-700 font-pregular text-base leading-6">
            I'm a Full-Stack Engineer, mobile app developer,and UI/UX Designer
            from Kigali City, Rwanda. I have a strong sense of ownership and
            expertise in both frontend and backend technologies. My outstanding
            communication and teamwork abilities enable me to collaborate
            effectively with diverse teams. Passionate about continuous
            learning, I quickly adapt to new technological advancements.
          </Text>
          <Text className="text-gray-700 font-pregular text-base leading-6 mt-3">
            My skills and dedication drive me to create innovative solutions and
            exceptional user experiences.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
