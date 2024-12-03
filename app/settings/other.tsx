import { SettingsLayout } from "@/components/layouts/SettingsLayout";
import { Text } from "react-native";
import { ENTRIES } from ".";

export default function ManagePagesScreen() {
  return (
    <SettingsLayout>
      <Text>Nested page</Text>

      {Object.keys(ENTRIES).map((entry) => (
        // eslint-disable-next-line react-native/no-color-literals
        <Text
          key={entry}
          style={{
            fontSize: 20,
            backgroundColor: "#e2e2e2",
            paddingVertical: 10,
          }}
        >
          Nested element in ScrollView
        </Text>
      ))}
    </SettingsLayout>
  );
}
