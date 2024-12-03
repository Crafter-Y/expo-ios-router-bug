import { Stack } from "expo-router/stack";

function DefaultLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
  );
}

export default DefaultLayout;
