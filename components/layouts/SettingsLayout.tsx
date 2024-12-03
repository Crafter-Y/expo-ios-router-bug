import { ScrollView, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {
  children: React.ReactNode;
};

export const SettingsLayout = ({ children }: Props) => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Settings",
          headerBackTitle: "Back",
        }}
      />
      <ScrollView>{children}</ScrollView>
    </View>
  );
};
