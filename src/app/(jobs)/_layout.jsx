
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const JobLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="JobDescription" options={{ headerShown: false }} />
        <Stack.Screen name="Recommendations" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />

    </>
  );
};

export default JobLayout;