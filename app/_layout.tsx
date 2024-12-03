import { Stack } from "expo-router/stack";

function DefaultLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

export default DefaultLayout;
