module.exports = {
  expo: {
    name: "expo-ios-router-bug",
    slug: "expo-ios-router-bug",
    scheme: "expo-ios-router-bug",
    version: "1.0.10",
    orientation: "default",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    owner: "crafter_y",
    plugins: [
      "expo-router",
      "expo-localization",
      [
        "expo-calendar",
        {
          calendarPermission:
            "Die App benötigt hierfür Zugriff auf den Kalender",
        },
      ],
    ],
  },
};
