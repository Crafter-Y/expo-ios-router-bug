import { Pressable, Text, View } from "react-native";
import { SettingsLayout } from "@/components/layouts/SettingsLayout";
import { router } from "expo-router";

export const ENTRIES = Array.from({ length: 20 }, (e, i) => i);

export default function BaseSettingsScreen() {
  return (
    <SettingsLayout>
      <View>
        {Object.keys(ENTRIES).map((entry) => (
          <Pressable
            key={entry}
            // eslint-disable-next-line react-native/no-color-literals
            style={{
              backgroundColor: "#e2e2e2",
              paddingVertical: 8,
            }}
            onPress={() => {
              router.push("/settings/other");
            }}
          >
            <Text style={{ fontSize: 20 }}>Open Nested Page</Text>
          </Pressable>
        ))}
      </View>
    </SettingsLayout>
  );
}
