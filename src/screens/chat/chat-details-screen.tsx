import { View, Text, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ChatDetailsScreen = () => {
  const android = Platform.OS === "android";
  return (
    <SafeAreaView
      className="justify-center items-center relative bg-white"
      style={{ paddingTop: android ? hp(4) : 0 }}
    >
      <Text>ChatDetailsScreen</Text>
    </SafeAreaView>
  );
};

export default ChatDetailsScreen;
