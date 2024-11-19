import "dotenv/config";

export default {
  expo: {
    name: "journey-journal",
    version: "1.2.0",
    orientation: "portrait",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.journey-journal.app",
      config: {
        googleMapsApiKey: process.env.MAP_KEY,
      },
    },
    android: {
      package: "com.journey-journal.app",
      config: {
        googleMaps: {
          apiKey: process.env.MAP_KEY,
        },
      },
    },
    extra: {
      eas: {
        projectId: "538cda1d-be0d-4ee3-833e-83f6a503dca9",
      },
    },
  },
};
